import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

class Navigation extends React.PureComponent {

	LINK = ["Accueil","Produit","Article","Marque","Centre"]
	SCREEN = ["Home", "Product", "Article", "Brand", "Shop"]

	constructor(props) {
		super(props)
	}

	navigate = (value) => {
		this.props.navigation.navigate(value)
	}

	render(){
		const link = this.LINK.map((value, index) => {
			const style = this.props.navigation.state.routeName === this.SCREEN[index] ? [styles.btn, styles.btnActive] : styles.btn
			return <StyledButton 
				key={index} 
				title={value} 
				style={style} 
				onPress={() => this.navigate(this.SCREEN[index], index)}
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
