import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Toast from 'react-native-root-toast'

class IconButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={{uri: this.props.icon}}
				/>
			</TouchableOpacity>
		)
	}
}

export class LikeButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./like.png')}
				/>
			</TouchableOpacity>
		)
	}
}

export class SendButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./send.png')}
				/>
			</TouchableOpacity>
		)
	}
}

export class LikedButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./liked.png')}
				/>
			</TouchableOpacity>
		)
	}
}

export class CommentButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./comment.png')}
				/>
			</TouchableOpacity>
		)
	}
}

export class ShareButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./share.png')}
				/>
			</TouchableOpacity>
		)
	}
}

export class CartButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.addToCart}>
				<Image
					style={this.props.style}
					source={require('./cart.png')}
				/>
			</TouchableOpacity>
		)
	}

	addToCart = () => {
		Toast.show("Le produit a été ajouté dans votre panier",{
			duration: Toast.durations.SHORT,
			position: 100
		})
	}
}

export default IconButton