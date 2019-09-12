import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import StyledButton from './StyledButton'

class Navigation extends React.PureComponent {

	LINK = ["Accueil","Produit","Article","Marque","Centre commercial"]
	SCREEN = ["Home", "Product", "Article", "Brand", "Shop"]

	constructor(props) {
		super(props)
	}

	navigate = (value) => {
		this.props.navigation.navigate(value)
	}

	render(){
		const link = this.LINK.map((value, index) => {
			const active = this.props.navigation.state.routeName === this.SCREEN[index]
			const style = active ? [styles.btn, styles.btnActive] : styles.btn
			const color = active ? "#FFF" : "black" 
			return <StyledButton 
				key={index} 
				title={value} 
				style={style} 
				onPress={() => this.navigate(this.SCREEN[index], index)}
				color={color} />
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
		backgroundColor: "#F7F5F6",
		borderColor: "#F7F5F6",
		borderWidth: 1,
		borderRadius: 10,
		marginLeft: 5,
		marginRight: 5,
		paddingLeft:10,
		paddingRight: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 16,
	},
	btnActive: {
		backgroundColor: "#000"
	}
})

export default Navigation
