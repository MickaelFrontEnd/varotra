import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LikeButton, LikedButton, CommentButton, ShareButton, CartButton } from './IconButton'

class Tiles extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showContent: false,
			hasLiked: false
		}
	}

	toggleControls = () => {
		const showContent = this.state.showContent
		this.setState({ showContent: !showContent })
	}

	like = () => {
		this.props.onLike()
		this.setState((previousState) => ({
			hasLiked: !previousState.hasLiked
		}))
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
					{this.props.showLike &&
						<View style={styles.btnContainer}>
							{ this.state.hasLiked ? <LikedButton onPress={this.like} style={styles.btn} /> : <LikeButton onPress={this.like} style={styles.btn} /> }
						</View>
					}
					{this.props.showComment && <View style={styles.btnContainer}><CommentButton style={styles.btn} /></View>}
					{this.props.showShare && <View style={styles.btnContainer}><ShareButton style={styles.btn} /></View>}
					{this.props.showCart && <View style={styles.btnContainer}><CartButton style={styles.btn} /></View>}
				</View>
				{
					this.state.showContent && (
						<View style={styles.content}>
							<Text>Désignation: {this.props.title}</Text>
							<Text>Description: {this.props.description}</Text>
						</View>
					)
				}
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
