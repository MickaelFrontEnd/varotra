import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LikeButton, CommentButton, ShareButton, CartButton } from './IconButton'

class Tiles extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showDescription: false
		}
	}

	toggleControls = () => {
		const showDescription = this.state.showDescription
		this.setState({ showDescription: !showDescription })
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.toggleControls}>
					<Image
						style={styles.visual}
						source={{ uri: this.props.visual }} />
				</TouchableOpacity>
				{
					this.state.showDescription &&
					<Text>
						Lorem Ipsum
Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.
					</Text>
				}
				<View style={styles.controls}>
					{this.props.showLike && <View style={styles.btnContainer}><LikeButton style={styles.btn} /></View>}
					{this.props.showComment && <View style={styles.btnContainer}><CommentButton style={styles.btn} /></View>}
					{this.props.showShare && <View style={styles.btnContainer}><ShareButton style={styles.btn} /></View>}
					{this.props.showCart && <View style={styles.btnContainer}><CartButton style={styles.btn} /></View>}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "column",
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 16,
		zIndex: 100
	},
	visual: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	controls: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "flex-start",
		paddingTop: 20,
		paddingBottom: 20,
		width: "100%"
	},
	btnContainer: {
		width: "25%",
		flex: 0,
		justifyContent: "center",
		alignItems: "center"
	},
	btn: {
		width: 25,
		height: 25
	}
})

export default Tiles
