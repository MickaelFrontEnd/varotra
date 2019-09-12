import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeActivity from './../Pages/HomeActivity'
import ProductActivity from './../Pages/ProductActivity'
import ArticleActivity from './../Pages/ArticleActivity'
import BrandActivity from './../Pages/BrandActivity'
import ShopActivity from './../Pages/ShopActivity'
import ActivityActivity from './../Pages/ActivityActivity'
import CartActivity from './../Pages/CartActivity'
import NotificationActivity from './../Pages/NotificationActivity'
import LoginActivity from './../Pages/LoginActivity'
import SearchResultActivity from './../Pages/SearchResultActivity'
import DrawerMenu from './../UI/DrawerMenu'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Search from '../UI/Search'
import CustomDrawer from './CustomDrawer'

const EmptyComponent = () => {
	return null
}

export const HomeNavigator = createStackNavigator({
	Home: {
		screen: HomeActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Accueil',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const ProductNavigator = createStackNavigator({
	Product: {
		screen: ProductActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Nos produits',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const ArticleNavigator = createStackNavigator({
	Article: {
		screen: ArticleActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Nos articles',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const BrandNavigator = createStackNavigator({
	Brand: {
		screen: BrandActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Nos marques',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const ShopNavigator = createStackNavigator({
	Shop: {
		screen: ShopActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Nos centres',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const ActivityNavigator = createStackNavigator({
	Activity: {
		screen: ActivityActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Mes activités',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const CartNavigator = createStackNavigator({
	Cart: {
		screen: CartActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Mon panier',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const NotificationNavigator = createStackNavigator({
	Notification: {
		screen: NotificationActivity,
		navigationOptions: ({ navigation }) => ({
			title: 'Notifications',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const LoginNavigator = createStackNavigator({
	Login: {
		screen: LoginActivity,
		navigationOptions: () => ({
			title: null,
			headerLeft: null,
			headerRight: null,

		})
	}
},{ headerMode: "none" })

export const SearchResultNavigator = createStackNavigator({
	Login: {
		screen: SearchResultActivity,
		navigationOptions: ({navigation}) => ({
			title: 'Résultat de recherche',
			headerLeft: <DrawerMenu navigation={navigation} />,
			headerRight: <Search navigation={navigation} />
		})
	}
})

export const DrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Accueil',
			drawerIcon: () => <Ionicons name="md-home" size={24} />
		})
	},
	Product: {
		screen: ProductNavigator,
		navigationOptions: () => ({
			drawerLabel: <EmptyComponent />
		})
	},
	Article: {
		screen: ArticleNavigator,
		navigationOptions: () => ({
			drawerLabel: <EmptyComponent />
		})
	},
	Brand: {
		screen: BrandNavigator,
		navigationOptions: () => ({
			drawerLabel: <EmptyComponent />
		})
	},
	Shop: {
		screen: ShopNavigator,
		navigationOptions: () => ({
			drawerLabel: <EmptyComponent />
		})
	},
	SearchResult: {
		screen: SearchResultNavigator,
		navigationOptions: () => ({
			drawerLabel: <EmptyComponent />
		})
	},
	Activity: {
		screen: ActivityNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Mes activités',
			drawerIcon: () => <Ionicons name="md-brush" size={24} />
		})
	},
	Cart: {
		screen: CartNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Mon Panier',
			drawerIcon: () => <Ionicons name="md-cart" size={24} />
		})
	},
	Notification: {
		screen: NotificationNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Notifications (1)',
			drawerIcon: () => <Ionicons name="md-notifications" size={24} />
		})
	},
	Login: {
		screen: LoginNavigator,
		navigationOptions: () => ({
			drawerLabel: 'Déconnexion',
			drawerIcon: () => <Ionicons name="md-log-out" size={24} />
		})
	}
}, {
		initialRouteName: 'Login',
		contentComponent: CustomDrawer,
		hideStatusBar: true,
		contentOptions: {
			activeTintColor: "white",
			activeBackgroundColor: "#5BD3B4"
		},
		unmountInactiveRoutes: true,		
	})

export default createAppContainer(DrawerNavigator)