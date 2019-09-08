import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import BannerTile from '../UI/BannerTile'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class BrandActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			brands: [],
			suggestions: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const brands = await getData(URL.BRAND_BRAND)
		const suggestions = await getData(URL.BRAND_SUGGESTION)

		this.setState({
			brands: brands.marques,
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
				<Section title="Nos marques">
					{
						this.state.brands.map((value, index) => (
							<BannerTile
								key={index}
								visual={value.photo}
								textual={value.designation} />
						))
					}
					{
						(this.state.brands.length > 0) && <ViewMoreBtn />
					}
				</Section>
			</Container>
		);
	}
}

export default BrandActivity