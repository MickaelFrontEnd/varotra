import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Container from './../Hoc/Container'
import StyledButton from '../UI/StyledButton';

class LoginActivity extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Container>
				<View style={styles.container}>
					<View style={styles.loginContainer}>
						<Text style={styles.title}>SyrecPro</Text>
						<TextInput style={styles.input} placeholder="Votre identifiant" />
						<TextInput style={styles.input} placeholder="Votre mot de passe" />
						<StyledButton title="Se connecter" style={styles.btnLogin} color="white" />
						<StyledButton title="S'inscrire" style={styles.btnSubscription} color="white" />
						<Text style={styles.link}>Identifiant et/ou mot de passe oublié?</Text>
					</View>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%"
	},
	loginContainer: {
		padding: 20,
		width: "100%",
	},
	title: {
		fontSize: 40,
		marginBottom: 25,
		textAlign: "center",
		color: "#102243"
	},
	input: {
		padding: 10,
		width: "100%",
		borderColor: "#102243",
		borderWidth: 1,
		marginBottom: 10,
		fontSize: 18,
		color: "#102243"
	},
	btnLogin: {
		width: "100%",
		padding: 10,
		backgroundColor: "#5BD3B4",
		color: "white",
		marginBottom: 10
	},
	btnSubscription: {
		width: "100%",
		padding: 10,
		backgroundColor: "#474457",
		color: "white",
		marginBottom: 10
	},
	link: {
		textDecorationLine: "underline",
		textAlign: "center"
	}
});

export default LoginActivity;