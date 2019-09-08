import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Section extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={this.props.childrenContainer}>
					{this.props.children}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10
	},
	title: {
		fontSize: 30,
		marginBottom: 20
	}
})

export default Section