import React from 'react'
import { Text, StyleSheet } from 'react-native'

class ErrorText extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Text style={{...this.props.style, ...styles.text}}>{this.props.text}</Text>
	}
}

const styles = StyleSheet.create({
	text: {
		color: "red",
		fontSize: 15,
		marginBottom: 10,
	}
})

export default ErrorText