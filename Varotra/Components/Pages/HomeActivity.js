import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from './../UI/ProductSuggestion'
import Tiles from './../UI/Tiles'
import Section from './../UI/Section'
import BannerTile from './../UI/BannerTile'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import { HOME_PRODUCT } from './../Api/URL'

class HomeActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: []
		}
	}

	render() {
		return (
			<Container>
				<Navigation navigation={this.props.navigation} />
				<ProductSuggestion />
				<Section title="Nos produits" childrenContainer={{ flex: 0 }}>
					{
						this.state.products.map((value, index) => {
							return (
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
								/>
							)
						})
					}
					{
						(this.state.products.length > 0) && <ViewMoreBtn />
					}
				</Section>
				<Section title="Nos articles">
					<Tiles
						visual="https://assets.pcmag.com/media/images/457973-apple-macbook-pro-15-inch-2017.jpg?width=810&height=456"
						showLike={true}
						showComment={true}
						showShare={false}
						showCart={false} />
					<Tiles
						visual="https://assets.pcmag.com/media/images/457973-apple-macbook-pro-15-inch-2017.jpg?width=810&height=456"
						showLike={true}
						showComment={true}
						showShare={false}
						showCart={false} />
					<ViewMoreBtn />
				</Section>
				<Section title="Nos marques">
					<BannerTile
						visual="https://zdnet3.cbsistatic.com/hub/i/r/2019/08/05/b2e40423-7c4c-48b5-9c7a-ea7ee92f96fe/thumbnail/770x433/c0942922b4c437cffdac1b9d2b0fd7e6/13-inch-mbpro-header.jpg"
						textual="Adidas" />
					<BannerTile
						visual="https://assets.pcmag.com/media/images/457973-apple-macbook-pro-15-inch-2017.jpg?width=810&height=456"
						textual="Nike" />
					<ViewMoreBtn />
				</Section>
				<Section title="Nos centres">
					<BannerTile
						visual="https://zdnet3.cbsistatic.com/hub/i/r/2019/08/05/b2e40423-7c4c-48b5-9c7a-ea7ee92f96fe/thumbnail/770x433/c0942922b4c437cffdac1b9d2b0fd7e6/13-inch-mbpro-header.jpg"
						textual="Apple" />
					<BannerTile
						visual="https://assets.pcmag.com/media/images/457973-apple-macbook-pro-15-inch-2017.jpg?width=810&height=456"
						textual="Microsoft" />
					<ViewMoreBtn />
				</Section>
			</Container>
		);
	}

	componentDidMount() {
		const products = this.getProduct()
		products.then((data) => this.setState({ products: data.produits }))
	}

	getProduct = () => {
		return fetch(HOME_PRODUCT)
			.then((response) => response.json())
			.catch((error) => alert(error))
	}
}

export default HomeActivity;