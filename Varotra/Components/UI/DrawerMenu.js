import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

class DrawerMenu extends React.Component {

	toggleDrawer = () => {
		this.props.navigation.toggleDrawer();
	}

	render() {
		return (
			<View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
				<TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
					<Image
						source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
						style={{ width: 25, height: 25, marginLeft: 5 }}
					/>
				</TouchableOpacity>
			</View>
		)
	}
}

export default DrawerMenu;