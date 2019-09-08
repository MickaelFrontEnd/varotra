import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import Tiles from '../UI/Tiles'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class ProductActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			suggestions: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const products = await getData(URL.PRODUCT_PRODUCT)
		const suggestions = await getData(URL.PRODUCT_SUGGESTION)

		this.setState({
			products: products.produits,
			suggestions: suggestions.suggestions,
			loading: false
		})
	}

	render() {
		return (
			this.state.loading ? <Indicator /> : 
			<Container>
				<Navigation navigation={this.props.navigation} />
				<ProductSuggestion list={this.state.suggestions} />
				<Section title="Nos produits" childrenContainer={{ flex: 0 }}>
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
								onLike={this.getSuggestion}
							/>
						))
					}
					{
						(this.state.products.length > 0) && <ViewMoreBtn />
					}
				</Section>
			</Container>
		);
	}
}

export default ProductActivity;