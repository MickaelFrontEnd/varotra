import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class Search extends React.Component {

	render(){
		return (
			<View style={styles.container}>
				<TextInput placeholder="Tapez votre recherche ici" style={styles.input} />
				<Button title="Search" style={styles.btn} />
			</View>
		)
	}
}

export default Search;

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
	},
	input: {
		borderRadius: 10,
		borderColor: "black",
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		flexBasis: "90%"
	},
	btn: {
		flexBasis: "10%"
	}
});