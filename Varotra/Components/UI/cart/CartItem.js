import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class CartItem extends React.Component {
	render() {
		return (
			<View style={[styles.container, styles.item]}>
				<View style={styles.imgContainer}>
					<Image
						source={{ uri: this.props.visual }}
						style={[styles.visual]} />
				</View>
				<Text style={[styles.row, styles.center]}>{this.props.designation}</Text>
				<Text style={[styles.row, styles.number, styles.editable]}>{this.props.quantity}</Text>
				<Text style={[styles.row, styles.number]}>{this.props.unitPrice}</Text>
				<Text style={[styles.row, styles.number]}>{this.props.totalPrice}</Text>
			</View>
		)
	}
}

export class CartHeader extends React.Component {
	render() {
		return (
			<View style={[styles.container, styles.headerContainer]}>
				<Text style={[styles.row, styles.header, styles.left]}>Photo</Text>
				<Text style={[styles.row, styles.header, styles.center]}>Désignation</Text>
				<Text style={[styles.row, styles.header, styles.number]}>Quantité</Text>
				<Text style={[styles.row, styles.header, styles.number]}>PU</Text>
				<Text style={[styles.row, styles.header, styles.number]}>PT</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center"
	},
	headerContainer: {
		paddingTop: 20,
		paddingBottom: 20
	},
	imgContainer: {
		flexBasis: "20%"
	},
	visual: {
		width: 50,
		height: 50,
		resizeMode: "cover",
	},
	row: {
		flexBasis: "20%",
		overflow: "hidden",
		fontSize: 16
	},
	header: {
		fontWeight: "bold",
		textDecorationLine: "underline"
	},
	center: {
		textAlign: "center"
	},
	left: {
		textAlign: "left"
	},
	number: {
		textAlign: "right"
	},
	item: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		paddingTop: 10,
		paddingBottom: 10
	},
	editable: {
		color: "blue",
		textDecorationLine: "underline"
	}
})

export default CartItem