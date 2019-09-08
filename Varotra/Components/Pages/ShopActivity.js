import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import BannerTile from '../UI/BannerTile'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class ShopActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shops: [],
			suggestions: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const shops = await getData(URL.SHOP_SHOP)
		const suggestions = await getData(URL.SHOP_SUGGESTION)

		this.setState({
			shops: shops.centres,
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
					<Section title="Nos centres " childrenContainer={{ flex: 0 }}>
						{
							this.state.shops.map((value, index) => (
								<BannerTile
									key={index}
									visual={value.photo}
									textual={value.designation} />
							))
						}
						{
							(this.state.shops.length > 0) && <ViewMoreBtn />
						}
					</Section>
				</Container>
		);
	}
}

export default ShopActivity