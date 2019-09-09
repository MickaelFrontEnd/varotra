import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, Alert } from 'react-native'
import { LikeButton, LikedButton, CommentButton, ShareButton, CartButton, SendButton } from './IconButton'
import Toast from 'react-native-root-toast'

class Tiles extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			showContent: false,
			hasLiked: false,
			comments: []
		}
		this.comment = ''
	}

	toggleControls = () => {
		this.setState((previousState) => ({
			showContent: !previousState.showContent
		}))
	}

	like = () => {
		if (this.props.onLike) {
			this.props.onLike()
		}
		this.setState((previousState) => ({
			hasLiked: !previousState.hasLiked
		}))
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments ? this.props.comments : []
		})
	}

	addComment = () => {
		this.setState((previousState) => {
			const { comments } = previousState
			comments.push({
				contenu: this.comment,
				utilisateur: 'Kevin Jonathan'
			})
			return {
				comments: comments,
				commentValue: ''
			}
		})
	}

	onTextChange = (text) => {
		this.comment = text
	}

	share = () => {
		Alert.prompt("Saisissez l'addresse email de l'utilisateur", null, (_) => {
			Toast.show("Produit partagé",{
				duration: Toast.durations.SHORT,
				position: 100
			})
		})
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
							{this.state.hasLiked ? <LikedButton onPress={this.like} style={styles.btn} /> : <LikeButton onPress={this.like} style={styles.btn} />}
						</View>
					}
					{this.props.showComment && <View style={styles.btnContainer}><CommentButton style={styles.btn} /></View>}
					{this.props.showShare && <View style={styles.btnContainer}><ShareButton onPress={this.share} style={styles.btn} /></View>}
					{this.props.showCart && <View style={styles.btnContainer}><CartButton style={styles.btn} /></View>}
				</View>
				{
					this.state.showContent && (
						<View style={styles.content}>
							<View style={styles.textContainer}>
								<Text style={[styles.header]}>Désignation:</Text>
								<Text style={[styles.paragraph]}>{this.props.title}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text style={[styles.header]}>Description:</Text>
								<Text style={[styles.paragraph]}>{this.props.description}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text style={[styles.header]}>Prix:</Text>
								<Text style={[styles.paragraph]}>{this.props.price}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text style={[styles.header]}>Note:</Text>
								<Text style={[styles.paragraph]}>{this.props.note}</Text>
							</View>
							<View style={styles.textContainer}>
								<Text style={[styles.header]}>Commentaire:</Text>
								{
									this.state.comments.map((value, index) => (
										<Text style={[styles.paragraph, {marginBottom: 5}]} key={index}>
											{`${value.utilisateur}: ${value.contenu}`}
										</Text>
									))
								}
							</View>
							<View style={styles.commentForm}>
								<TextInput 
									onChangeText={this.onTextChange} 
									placeholder="Votre commentaire" 
									style={styles.comment} />
								<SendButton style={styles.sendBtn} onPress={this.addComment} />
							</View>
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
	},
	textContainer: {
		marginBottom: 5
	},
	header: {
		fontSize: 18,
		fontWeight: "bold"
	},
	paragraph: {
		fontSize: 16
	},
	comment: {
		height: 40,
		borderColor: "#102243",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		width: "90%"
	},
	sendBtn: {
		width: 25,
		height: 25,
		marginLeft: 10
	},
	commentForm: {
		marginTop: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	}
})

export default Tiles
