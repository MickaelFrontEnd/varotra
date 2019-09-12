import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'
import getData, { getUrl } from '../Api/Api'

class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			products: [],
			query: '',
			expandSearch: false
		}
	}

	findProduct(query) {
		if (query === '') {
			return [];
		}
		const { products } = this.state;
		const regex = new RegExp(`${query.trim()}`, 'i');
		return products.filter(product => product.search(regex) >= 0)
	}

	expandSearch = () => {
		this.setState((previousState) => ({
			expandSearch: !previousState.expandSearch
		}))
	}

	async componentDidMount() {
		const URL = await getUrl()
		const products = await getData(URL.AUTOCOMPLETE)
		this.setState({
			products: products.resultats
		})
	}

	render() {
		const { query } = this.state;
    const products = this.findProduct(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
		
		return (
			<View style={styles.container}>
				{
					this.state.expandSearch &&
					<Autocomplete
						autoCapitalize="none"
						autoCorrect={false}
						containerStyle={styles.autoComplete}
						data={products.length === 1 && comp(query, products[0]) ? [] : products}
						onChangeText={text => this.setState({query: text})}
						placeholder="Veuillez taper votre recherche"
						renderItem={({ item }) => (
							<TouchableOpacity onPress={() => {
								this.props.navigation.navigate('SearchResult')
								this.setState({expandSearch: false})
							}}>
								<Text style={styles.item}>{item}</Text>
							</TouchableOpacity>
						)}
					/>
				}
				<TouchableOpacity onPress={this.expandSearch}>
					<Image
						style={{ width: 25, height: 25 }}
						source={require('./search.png')}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},
	autoComplete: {
		width: 300,
		marginRight: 10,
	},
	item: {
		padding: 10
	}
})

export default Search
