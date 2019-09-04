import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

class Container extends React.Component {
	render() {
		return (
			<ScrollView contentContainerStyle={[styles.container, this.props.style]}>
				{this.props.children}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	}
});

export default Container;