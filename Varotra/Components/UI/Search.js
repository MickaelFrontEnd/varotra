import React from 'react'
import { View, StyleSheet, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Search extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			expandSearch: false
		}
	}

	expandSearch = () => {
		this.setState({
			expandSearch: !this.state.expandSearch
		})
	}

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.expandSearch && <TextInput style={styles.input} />
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
	input: {
		height: 25,
		width: 300,
		borderColor: 'gray',
		borderWidth: 1,
		marginRight: 10,
		zIndex: 100,
		backgroundColor: 'white'
	}
})

export default Search
