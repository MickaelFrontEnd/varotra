import React from 'react'
import ImageOnlyTiles from './ImageOnlyTiles'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

class ProductSuggestion extends React.Component {
	render() {
		return (
			<View style={styles.suggestionContainer}>
				<Text style={styles.suggestionTitle}>Nos suggestions</Text>
				<ScrollView contentContainerStyle={styles.scrollable} horizontal={true} indicatorStyle="white">
					<ImageOnlyTiles 
						textual="Redmi note 7"
						visual="https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg" />
					<ImageOnlyTiles 
						textual="Huawei y1"
						visual="https://media.4rgos.it/i/Argos/7973374_R_Z001A?w=750&h=440&qlt=70" />
					<ImageOnlyTiles
						textual="Redmi note 8" 
						visual="https://i.gadgets360cdn.com/products/large/1551344291_635_redmi_note_7.jpg" />
					<ImageOnlyTiles 
						textual="Huawei p9"
						visual="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347785_sd.jpg" />
					<ImageOnlyTiles 
						textual="Huawei p10"
						visual="https://static.toiimg.com/photo/63393835/Vivo-Apex.jpg" />
				</ScrollView>
			</View>
		)
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