import React from 'react'
import CartItem, { CartHeader } from './../UI/cart/CartItem'
import Container from './../Hoc/Container'
import StyledButton from '../UI/StyledButton'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'native-base';
import getData, { getUrl } from '../Api/Api';

class CartActivity extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			carts: []
		}
	}

	render() {
		return (
			<Container>
				<View style={{
					justifyContent: "center", 
					alignItems: "center"
					}}>
					<Ionicons 
					name="md-cart" 
					size={50} />
				</View>
				<CartHeader />
				{
					this.state.carts.map((value, index) => (
						<CartItem 
							key={index}
							visual={value.photo}
							designation={value.designation}
							quantity={value.quantite}
							unitPrice={value.prixUnitaire}
							totalPrice={value.prixTotal}
							 />
					))
				}
				<StyledButton title="Acheter" color="white" style={styles.purchaseBtn} />
				<StyledButton title="Effacer" color="white" style={styles.clearBtn} />
			</Container>
		)
	}

	async componentDidMount() {
		const URL = await getUrl()
		const carts = await getData(URL.CART)
		this.setState({
			carts: carts.paniers
		})
	}
}

const styles = StyleSheet.create({
	purchaseBtn: {
		backgroundColor: "#449D44",
		marginTop: 20
	},
	clearBtn: {
		backgroundColor: "#C9302C",
		marginTop: 20
	}
})

export default CartActivity