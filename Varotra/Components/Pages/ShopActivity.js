import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import BannerTile from '../UI/BannerTile'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'

class ShopActivity extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container>
				<Navigation navigation={this.props.navigation}/>
				<ProductSuggestion />
				<Section title="Nos centres " childrenContainer={{ flex: 0 }}>
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
}

export default ShopActivity