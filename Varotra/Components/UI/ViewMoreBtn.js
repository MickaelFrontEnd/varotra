import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledButton from './../UI/StyledButton'

class ViewMoreBtn extends React.Component {
	render() {
		return (
			<View>
				<StyledButton
					onPress={this.props.onPress}
					title="Voir plus..."
					style={styles.viewMore}
					color="#000" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewMore: {
		flex: 0,
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#F7F5F6",
		borderRadius: 10,
		paddingTop: 5,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 16,
	}
})

export default ViewMoreBtn