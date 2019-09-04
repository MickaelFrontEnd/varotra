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
				<View style={styles.controls}>
					<LikeButton style={styles.btn} />
					<CommentButton style={styles.btn} />
					<ShareButton style={styles.btn} />
					<CartButton style={styles.btn} />
				</View>
				{this.state.showDescription &&
					<View>
						<Text>
							Lorem Ipsum
	Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.
						</Text>
					</View>
				}
			</View>
		)
	}
}

export default Tiles

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "column",
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 16
	},
	visual: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	controls: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20
	},
	left: {
		flex: 0,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		width: "50%"
	},
	right: {
		flex: 0,
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "space-between",
		width: "50%"
	},
	btn: {
		width: 25,
		height: 25
	}
})