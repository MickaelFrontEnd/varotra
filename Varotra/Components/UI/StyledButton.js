import React from 'react';
import { View, Button } from 'react-native';

class StyledButton extends React.Component {
	render(){
		return (
			<View style={this.props.style}>
				<Button title={this.props.title} color={this.props.color} onPress={this.props.onPress} />
			</View>
		)
	}
}

export default StyledButton;
