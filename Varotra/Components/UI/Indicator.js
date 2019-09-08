import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

class Indicator extends React.Component {
	render() {
		return <ActivityIndicator 
			style={styles.container} 
			size={this.props.size} 
			color={this.props.color} />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Indicator