import React from 'react'
import Tiles from './../UI/Tiles'
import Container from './../Hoc/Container'

class HomeActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			products: []
		}
	}

	getProduct() {
		const url = 'http://192.168.100.11:8080/Syrecpro/Services/Produits/'
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => alert(error))
	}

	componentDidMount() {
		this.getProduct().then((response) => {
			if(response.status === 200) {
				this.setState({
					products: response.data
				})
			}
			else {
				alert(response.errorMessage)
			}
		})
	}

	render(){
		return (
			<Container>
				{this.state.products.map((product) => {
					//console.log(product)
					return <Tiles key={product.id} visual={product.photo} />
				})}
			</Container>
		);
	}
}

export default HomeActivity;