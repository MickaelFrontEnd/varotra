import React from 'react'
import { TouchableHighlight, Image } from 'react-native'

class IconButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={{uri: this.props.icon}}
				/>
			</TouchableHighlight>
		)
	}
}

export class LikeButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./like.png')}
				/>
			</TouchableHighlight>
		)
	}
}

export class LikedButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./liked.png')}
				/>
			</TouchableHighlight>
		)
	}
}

export class CommentButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./comment.png')}
				/>
			</TouchableHighlight>
		)
	}
}

export class ShareButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./share.png')}
				/>
			</TouchableHighlight>
		)
	}
}

export class CartButton extends React.Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<Image
					style={this.props.style}
					source={require('./cart.png')}
				/>
			</TouchableHighlight>
		)
	}
}

export default IconButton