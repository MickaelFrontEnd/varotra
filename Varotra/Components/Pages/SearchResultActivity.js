import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import Tiles from '../UI/Tiles'
import Section from './../UI/Section'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class SearchResultActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const products = await getData(URL.SEARCH)

		this.setState({
			products: products.produits,
			loading: false
		})
	}

	render() {
		return (
			this.state.loading ? <Indicator /> : 
			<Container>
				<Navigation navigation={this.props.navigation} />
				<Section title="1 résultat trouvé(s)" childrenContainer={{ flex: 0 }}>
					{
						this.state.products.map((value, index) => (
							<Tiles
								key={index}
								visual={value.photo}
								showLike={true}
								showComment={true}
								showShare={true}
								showCart={true}
								title={value.designation}
								description={value.description}
								like={value.nombreJaime}
								comments={value.commentaires}
								price={value.prix}
								note={value.note}
							/>
						))
					}
				</Section>
			</Container>
		);
	}
}

export default SearchResultActivity