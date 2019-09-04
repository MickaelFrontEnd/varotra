import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

class Navigation extends React.Component {

	render(){
		const link = ["Home","Produit","Article","Centre","Marque"].map((value, index) => {
			return <StyledButton key={index} title={value} style={styles.btn} color="white" />;
		});
		return (
			<ScrollView contentContainerStyle={styles.container} horizontal={true} indicatorStyle="white">
				{link}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20
	},
	btn: {
		backgroundColor: "#5BD3B4",
		borderRadius: 10,
		marginLeft: 5,
		marginRight: 5,
		width: 80
	}
})

export default Navigation
