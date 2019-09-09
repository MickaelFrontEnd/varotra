import React from 'react'
import { View, StyleSheet, Text, TextInput, AsyncStorage } from 'react-native'
import Container from './../Hoc/Container'
import StyledButton from '../UI/StyledButton'
import ErrorText from './../UI/ErrorText'

class LoginActivity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			usernameRequired: false,
			passwordRequired: false
		}
		this.userInput = {
			username: '',
			password: ''
		}
	}

	signin = () => {
		if(this.userInput.username === '' || this.userInput.password === '') {
			this.setState({ 
				usernameRequired: this.userInput.username === '',
				passwordRequired: this.userInput.password === ''
			})
		}
		else {
			if(this.userInput.username.includes('kevin')) {
				this.storeUser('kevin')
				.then(() => this.props.navigation.navigate("Home"))
				.catch((error) => alert(error))
			}
			else {
				this.storeUser('santa')
				.then(() => this.props.navigation.navigate("Home"))
				.catch((error) => alert(error))
			}
		}
	}

	storeUser(user) {
		return AsyncStorage.setItem('userId', user)
	}

	deleteUser() {
		return AsyncStorage.removeItem('userId')
	}

	onUsernameChange = text => {
		this.userInput.username = text
		this.setState({ usernameRequired: this.userInput.username === '' })
	}
	
	onPasswordChange = text => {
		this.userInput.password = text
		this.setState({ passwordRequired: this.userInput.password === '' })
	}

	render() {
		return (
			<Container style={styles.container}>
				<View style={styles.container}>
					<View style={styles.loginContainer}>
						<Text style={styles.title}>SyrecPro</Text>
						<TextInput
							style={styles.input}
							placeholder="Votre identifiant"
							autoCompleteType="email"
							textContentType="emailAddress"
							onChangeText={text => this.onUsernameChange(text)} />
						{
							this.state.usernameRequired && <ErrorText text="Identifiant obligatoire" />
						}
						<TextInput
							style={styles.input}
							placeholder="Votre mot de passe"
							autoCompleteType="password"
							textContentType="password"
							secureTextEntry={true}
							onChangeText={text => this.onPasswordChange(text)}  />
						{
							this.state.passwordRequired && <ErrorText text="Mot de passe obligatoire" />
						}
						<StyledButton 
							title="Se connecter" 
							style={styles.btnLogin} 
							color="white" 
							onPress={this.signin} />
						<StyledButton 
							title="S'inscrire" 
							style={styles.btnSubscription} 
							color="white" />
						<Text style={styles.link}>Identifiant et/ou mot de passe oublié?</Text>
					</View>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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