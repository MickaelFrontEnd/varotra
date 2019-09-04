import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerMenu from './DrawerMenu';
import Search from './Search';
import Navigation from './Navigation';

class Header extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topHeader}>
					<View style={styles.drawerMenu}>
						<DrawerMenu />
					</View>
					<View style={styles.search}>
						<Search />
					</View>
				</View>
				<View style={styles.navigation}>
					<Navigation />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		padding: 10
	},
	topHeader: {
		flex: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	navigation: {
		flex: 0,
		flexDirection: "row",
		paddingTop: 20,
		paddingBottom: 20,
		width: "100%"
	},
	search: {
		flexBasis: "60%",
		alignItems: "flex-end"
	},
	drawerMenu: {
		flexBasis: "40%",
		alignItems: "flex-start"
	}

});

export default Header;