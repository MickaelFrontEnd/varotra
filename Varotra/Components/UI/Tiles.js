import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Button from './StyledButton';

class Tiles extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showDescription: false
		}
	}

	toggleControls = () => {
		const showDescription = this.state.showDescription;
		this.setState({ showDescription: !showDescription });
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.toggleControls}>
					<Image
						style={styles.visual}
						source={{ uri: this.props.visual }} />
				</TouchableOpacity>
				<View style={styles.controls}>
					<View style={styles.left}>
						<Button title="J'aime" />
						<Button title="Commenter" />
					</View>
					<View style={styles.right}>
						<Button title="Partage" />
						<Button title="Panier" />
					</View>
				</View>
				{this.state.showDescription &&
					<View>
						<Text>
							Lorem Ipsum
	Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique, imprimée et éditoriale pour prévisualiser les mises en page et les maquettes visuelles.
						</Text>
					</View>
				}
			</View>
		)
	}
}

export default Tiles;

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "column",
		margin: 10
	},
	visual: {
		width: "100%",
		height: 200,
		resizeMode: "cover"
	},
	controls: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 10,
		paddingBottom: 10
	},
	left: {
		flexDirection: "row",
		alignItems: "flex-start"
	},
	right: {
		flexDirection: "row",
		alignItems: "flex-end"
	}
});