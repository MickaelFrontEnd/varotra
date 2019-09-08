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

	REFRESH_TIME = 5000 
	
	constructor(props) {
		super(props)
		this.state = {
			allProducts: [],
			products: [],
			suggestions: [],
			articles: [],
			brands: [],
			shops: [],
			loading: true,
			pushedSuggestion: 0
		}
		this.likeCount = 1
	}

	getProduct = () => {
		this.setState((previousState) => ({
			products: previousState.allProducts
		}))
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
							(this.state.products.length > 0) && <ViewMoreBtn onPress={this.getProduct} />
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
			allProducts: products.produits,
			products: products.produits.slice(0, 5),
			suggestions: suggestions.suggestions,
			articles: articles.articles,
			brands: brands.marques.slice(0, 5),
			shops: shops.centres,
			loading: false
		})
	}

	getSuggestion = async () => {
		this.likeCount++
		const URL = await getUrl()
		const suggestions = await getData(URL.LIKE)
		if (this.likeCount === 3) {
			setTimeout(() => {
				this.setState((previousState) => ({
					suggestions: suggestions.suggestions.concat(previousState.suggestions),
					pushedSuggestion: suggestions.suggestions.length
				}))
			}, this.REFRESH_TIME)
		}
	}
}

export default HomeActivity;