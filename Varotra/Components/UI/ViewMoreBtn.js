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
					color="white" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewMore: {
		flex: 0,
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "#f1c40f",
		borderRadius: 10,
		paddingTop: 5,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 5
	}
})

export default ViewMoreBtn