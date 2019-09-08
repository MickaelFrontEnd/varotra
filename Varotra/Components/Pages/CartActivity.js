import React from 'react'
import CartItem, { CartHeader } from './../UI/cart/CartItem'
import Container from './../Hoc/Container'
import StyledButton from '../UI/StyledButton'
import { StyleSheet, Alert, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View } from 'native-base';
import getData, { getUrl } from '../Api/Api'
import Indicator from './../UI/Indicator'
import Toast from 'react-native-root-toast'

class CartActivity extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			carts: [],
			isLoading: true,
			showConfirmation: false
		}
	}

	purschased = () => {
		Toast.show("Le produit a été ajouté dans votre panier",{
			duration: Toast.durations.SHORT,
			position: Toast.positions.TOP
		})
	}

	render() {
		return (
			this.state.isLoading ? <Indicator /> :
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
						this.state.carts.length === 0 && 
						<Text style={{
							fontSize: 18,
							fontWeight: "bold",
							textAlign: "center"
						}}>
							Aucun produit dans votre panier!
						</Text>
					}
					{
						this.state.carts.map((value, index) => (
							<CartItem
								key={index}
								visual={value.photo}
								designation={value.designation}
								quantity={value.quantite}
								unitPrice={value.prix}
								totalPrice={value.prixTotal}
							/>
						))
					}
					{
						this.state.carts.length > 0 &&
						<StyledButton
							title="Acheter"
							color="white"
							style={styles.purchaseBtn}
							onPress={this.onConfirm} />
					}
					{
						this.state.carts.length > 0 &&
						<StyledButton
							title="Effacer"
							color="white"
							style={styles.clearBtn} />
					}
				</Container>
		)
	}

	async componentDidMount() {
		const URL = await getUrl()
		const carts = await getData(URL.CART)
		this.setState({
			carts: carts.paniers,
			isLoading: false
		})
	}

	onConfirm = () => {
		Alert.alert(
			"Confirmation",
			"Confirmer l'achat?",
			[{
				text: "Annuler", onPress: () => alert("KO")
			},
			{
				text: "Confirmer", onPress: () => {
					this.purschased()
					this.setState({ carts: [] })
				}
			}]
		)
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