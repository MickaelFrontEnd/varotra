import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class ActivityItem extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Image source={{ uri: this.props.visual }} style={styles.visual} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>{this.props.content}</Text>
					<Text style={styles.date}>{this.props.date}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		backgroundColor: "#edf2fa",
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: "#dddfe2",
		borderBottomWidth: 1,
		borderBottomColor: "#dddfe2",
		height: 100
	},
	visual: {
		width: 80,
		height: 80
	},
	textContainer: {
		padding: 10,
		position: "relative",
		height: "100%",
		flex: 1
	},
	text: {
		fontSize: 18,
	},
	date: {
		fontSize: 15,
		fontStyle: "italic",
		position: "absolute",
		left: 10,
		bottom: 10
	}
})

export default ActivityItem