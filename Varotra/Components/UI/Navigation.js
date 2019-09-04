import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

class Navigation extends React.Component {

	render(){
		const link = ["Accueil","Produit","Article","Centre","Marque"].map((value, index) => {
			if(index === 1) {
				return <StyledButton 
					key={index} 
					title={value} 
					style={[styles.btn, styles.btnActive]} 
					color="white" />
			}
			return <StyledButton 
				key={index} 
				title={value} 
				style={styles.btn} 
				color="white" />
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
	},
	btnActive: {
		backgroundColor: "#474457"
	}
})

export default Navigation
