import React from 'react'
import { View, TouchableHighlight, StyleSheet, Image } from 'react-native'

class Search extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this.props.onPress}>
					<Image
						style={{width: 25, height: 25}}
						source={require('./search.png')}
					/>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},
	input: {
		borderRadius: 10,
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		flexBasis: "90%"
	},
	btn: {
		flexBasis: "10%"
	}
})

export default Search
