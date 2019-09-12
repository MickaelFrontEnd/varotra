import React from 'react'
import { Container, Header, Body, Content } from 'native-base'
import { Image, Text } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'

class CustomDrawer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			photo: "",
			name: ""
		}
	}
	
	render() {
		return (<Container>
			<Header style={{
				height: 320,
				paddingTop: 50,
				backgroundColor: "white"
			}}>
				<Body>
					<Image
						style={{
							width: 200,
							height: 200,
							resizeMode: "contain",
							marginBottom: 5
						}}
						source={require('./tolotra.png')}/>
					<Text style={{
						textDecorationLine: "underline",
						color: "#1A73E8",
						fontStyle: "italic"
					}}>
						Copyright 2019 © Hally
					</Text>
				</Body>
			</Header>
			<Content>
				<DrawerNavigatorItems {...this.props} />
			</Content>
		</Container>)
	}
}

export default CustomDrawer