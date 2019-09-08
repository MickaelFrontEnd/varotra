import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'

class BannerTile extends React.Component {
	render() {
		return (
			<View>
				<View style={styles.container}>
					<Image source={{ uri: this.props.visual }} style={styles.image} />
					<Text style={styles.text}>{this.props.textual}</Text>
				</View>
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
		elevation: 16,
		position: "relative",
		marginBottom: 20
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	text: {
		bottom: 0,
		left: 0,
		backgroundColor: "#000",
		opacity: 0.8,
		color: "white",
		padding: 10,
		width: "100%",
		fontSize: 20
	}
})

export default BannerTile