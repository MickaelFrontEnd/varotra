import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from './../UI/ProductSuggestion'
import Tiles from './../UI/Tiles'
import Section from './../UI/Section'
import BannerTile from './../UI/BannerTile'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import getData, { getUrl } from '../Api/Api'
import Indicator from './../UI/Indicator'


class HomeActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: [],
			suggestions: [],
			articles: [],
			brands: [],
			shops: [],
			loading: true,
			pushedSuggestion: 0
		}
	}

	render() {
		return (
			this.state.loading ? <Indicator /> :
				<Container>
					<Navigation navigation={this.props.navigation} />
					<ProductSuggestion list={this.state.suggestions} pushed={this.state.pushedSuggestion} />
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
					<Section title="Nos articles">
						{
							this.state.articles.map((value, index) => (
								<Tiles
									key={index}
									visual={value.photo}
									showLike={true}
									showComment={true}
									showShare={false}
									showCart={false} />
							))
						}
						{
							(this.state.articles.length > 0) && <ViewMoreBtn />
						}
					</Section>
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
					<Section title="Nos centres">
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

	async componentDidMount() {
		const URL = await getUrl()
		const products = await getData(URL.HOME_PRODUCT)
		const suggestions = await getData(URL.HOME_SUGGESTION)
		const articles = await getData(URL.HOME_ARTICLE)
		const brands = await getData(URL.HOME_BRAND)
		const shops = await getData(URL.HOME_SHOP)

		this.setState({
			products: products.produits,
			suggestions: suggestions.suggestions,
			articles: articles.articles,
			brands: brands.marques,
			shops: shops.centres,
			loading: false
		})
	}

	getSuggestion = async () => {
		const URL = await getUrl()
		const suggestions = await getData(URL.LIKE)
		this.setState((previousState) => ({
			suggestions: suggestions.suggestions.concat(previousState.suggestions),
			pushedSuggestion: suggestions.suggestions.length
		}))
	}
}

export default HomeActivity;