import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'


class ImageOnlyTiles extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={{ uri: this.props.visual }} style={styles.image} />
				<Text style={styles.text}>{this.props.textual}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 16
	},
	image: {
		borderRadius: 10,
		width: 100,
		height: 100,
		margin: 5
	},
	text: {
		textAlign: "center"
	}
})

export default ImageOnlyTiles