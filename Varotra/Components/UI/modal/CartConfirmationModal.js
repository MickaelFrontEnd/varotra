import React from 'react'
import { Modal, Text, StyledButton, StyleSheet } from 'react-native'

class CartConfirmationModal extends React.Component {
	render() {
		return (
			<Modal
				style={styles.container}
				animationType="slide"
				transparent={false}
				presentationStyle="pageSheet"
				visible={this.props.modalVisible}
				onRequestClose={() => {
					this.props.onClose()
				}}>
				<Text>Modal works</Text>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		height: 200,
		width: 200
	}
})

export default CartConfirmationModal