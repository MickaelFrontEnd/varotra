import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeActivity from './../Pages/HomeActivity'
import ProductActivity from './../Pages/ProductActivity'
import DrawerMenu from './../UI/DrawerMenu'

export const HomeNavigator = createStackNavigator({
	Home: {
		screen: HomeActivity,
		navigationOptions: ({navigation}) => ({
			title: 'Accueil',
			headerLeft: <DrawerMenu navigation={navigation} />
		})
	}
})

export const ProductNavigator = createStackNavigator({
	Product: {
		screen: ProductActivity,
		navigationOptions: ({navigation}) => ({
			title: 'Produits',
			headerLeft: <DrawerMenu navigation={navigation} />
		})
	}
})

export const DrawerNavigator = createDrawerNavigator({
	Product: {
		screen: ProductNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Produits'
		})
	},
	Home: {
		screen: HomeNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Accueil'
		})
	}
})

export default createAppContainer(DrawerNavigator)