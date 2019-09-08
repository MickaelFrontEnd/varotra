import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import Tiles from '../UI/Tiles'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'

class ProductActivity extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container>
				<Navigation navigation={this.props.navigation}/>
				<ProductSuggestion />
				<Section title="Nos produits" childrenContainer={{ flex: 0 }}>
					<Tiles
						visual="https://zdnet3.cbsistatic.com/hub/i/r/2019/08/05/b2e40423-7c4c-48b5-9c7a-ea7ee92f96fe/thumbnail/770x433/c0942922b4c437cffdac1b9d2b0fd7e6/13-inch-mbpro-header.jpg"
						showLike={true}
						showComment={true}
						showShare={true}
						showCart={true} />
					<Tiles
						visual="https://assets.pcmag.com/media/images/457973-apple-macbook-pro-15-inch-2017.jpg?width=810&height=456"
						showLike={true}
						showComment={true}
						showShare={true}
						showCart={true} />
					<ViewMoreBtn />
				</Section>
			</Container>
		);
	}
}

export default ProductActivity;