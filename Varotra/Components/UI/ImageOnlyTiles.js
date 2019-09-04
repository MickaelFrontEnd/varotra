import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'


class ImageOnlyTiles extends React.Component {
	render() {
		return (
			<View>
				<Image source={{ uri: this.props.visual }} style={styles.image} />
				<Text style={styles.text}>{this.props.textual}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
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