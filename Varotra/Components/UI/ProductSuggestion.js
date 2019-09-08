import React from 'react'
import SimpleTile from './SimpleTile'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import ScaleView from './../UI/animated/ScaleView'

class ProductSuggestion extends React.Component {
	render() {
		return (
			<View style={styles.suggestionContainer}>
				<Text style={styles.suggestionTitle}>Nos suggestions</Text>
				<ScrollView 
					contentContainerStyle={styles.scrollable} 
					horizontal={true} 
					indicatorStyle="white">
					{
						this.props.list.map((value, index) => {
							return index < this.props.pushed ?
								<ScaleView key={index}>
									<SimpleTile
										textual={value.designation}
										visual={value.photo} />
								</ScaleView> : <SimpleTile
									key={index}
									textual={value.designation}
									visual={value.photo} />
						})
					}
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