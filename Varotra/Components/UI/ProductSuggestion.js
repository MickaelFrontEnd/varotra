import React from 'react'
import ImageOnlyTiles from './ImageOnlyTiles'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import ScaleView from './../UI/animated/ScaleView'

class ProductSuggestion extends React.Component {

	REFRESH_TIME = 3000

	PRODUCT = [{
		textual: "Redmi note 7",
		visual: "https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg"
	}, {
		textual: "Huawei y1",
		visual: "https://media.4rgos.it/i/Argos/7973374_R_Z001A?w=750&h=440&qlt=70"
	}, {
		textual: "Redmi note 8",
		visual: "https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg"
	}, {
		textual: "Huawei p9",
		visual: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347785_sd.jpg"
	}, {
		textual: "Huawei p10",
		visual: "https://static.toiimg.com/photo/63393835/Vivo-Apex.jpg"
	}]

	PUSHED_PRODUCT = {
		textual: "Huawei p10",
		visual: "https://static.toiimg.com/photo/63393835/Vivo-Apex.jpg"
	}

	addOtherProduct() {
		setInterval(() => {
			const products = [...this.state.products]
			const lastItem = products.splice(-1, 1)
			products.splice(0, 0, lastItem[0])
			this.setState({
				products: products
			})
		}, this.REFRESH_TIME)
	}

	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	render() {
		return (
			<View style={styles.suggestionContainer}>
				<Text style={styles.suggestionTitle}>Nos suggestions</Text>
				<ScrollView contentContainerStyle={styles.scrollable} horizontal={true} indicatorStyle="white">
					{
						this.state.products.map((value, index) => {
							return index === 0 ?
								<ScaleView key={index}>
									<ImageOnlyTiles
										textual={value.textual}
										visual={value.visual} />
								</ScaleView> : <ImageOnlyTiles
									key={index}
									textual={value.textual}
									visual={value.visual} />
						})
					}
				</ScrollView>
			</View>
				)
			}
		
	componentDidMount() {
					this.setState({ products: this.PRODUCT })
		this.addOtherProduct()
			}
		}
		
const styles = StyleSheet.create({
					suggestionContainer: {
					padding: 5
			},
	suggestionTitle: {
					fontSize: 25,
				marginBottom: 20
			},
	scrollable: {
					height: 150
			}
		})
		
		
export default ProductSuggestion