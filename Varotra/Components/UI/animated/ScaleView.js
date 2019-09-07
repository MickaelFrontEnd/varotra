import React from 'react'
import { Animated } from 'react-native'

class ScaleView extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const opacity = new Animated.Value(0)	
		Animated.timing(
			opacity,{
				toValue: 1,
				duration: 500
			}
		).start()
		
		return (
			<Animated.View style={{ transform: [{scaleX: opacity}, {scaleY: opacity}] }}>
				{ this.props.children }
			</Animated.View>
		)
	}
}

export default ScaleView