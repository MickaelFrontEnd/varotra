import React from 'react'
import Container from './../Hoc/Container'
import Navigation from './../UI/Navigation'
import ProductSuggestion from '../UI/ProductSuggestion'
import Tiles from '../UI/Tiles'
import Section from './../UI/Section'
import ViewMoreBtn from './../UI/ViewMoreBtn'
import Indicator from './../UI/Indicator'
import getData, { getUrl } from './../Api/Api'

class ArticleActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
			suggestions: [],
			loading: true
		}
	}

	async componentDidMount() {
		const URL = await getUrl()
		const articles = await getData(URL.ARTICLE_ARTICLE)
		const suggestions = await getData(URL.PRODUCT_SUGGESTION)

		this.setState({
			articles: articles.articles,
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
					<Section title="Nos articles" childrenContainer={{ flex: 0 }}>
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
				</Container>
		);
	}
}

export default ArticleActivity