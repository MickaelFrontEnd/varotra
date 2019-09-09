import { AsyncStorage } from 'react-native'

export async function getUrl() {
	try {
		const BASE_URL_1 = 'https://demo4311500.mockable.io'
		const BASE_URL_2 = 'https://demo0510995.mockable.io'
		const userId = await AsyncStorage.getItem('userId')
		return userId === 'kevin' ?
		{
			HOME_SUGGESTION: `${BASE_URL_1}/Home/Suggestions/user1`,
			HOME_PRODUCT: `${BASE_URL_1}/Home/Produits/user1`,
			HOME_ARTICLE: `${BASE_URL_1}/Global/Articles/user`,
			HOME_BRAND: `${BASE_URL_1}/Global/Marques/user`,
			HOME_SHOP: `${BASE_URL_1}/Global/Centres/user`,
			PRODUCT_SUGGESTION: `${BASE_URL_1}/Produit/Suggestions/user1`,
			PRODUCT_PRODUCT: `${BASE_URL_1}/Produit/Produits/user1`,
			ARTICLE_ARTICLE: `${BASE_URL_1}/Global/Articles/user`,
			BRAND_SUGGESTION: `${BASE_URL_1}/Marque/Suggestions/user1`,
			BRAND_BRAND: `${BASE_URL_1}/Global/Marques/user`,
			SHOP_SHOP: `${BASE_URL_1}/Global/Centres/user`,
			SHOP_SUGGESTION: `${BASE_URL_1}/Home/Suggestions/user1`,
			ACTIVITY_ACTIVITY: `${BASE_URL_1}/Menu/Activites/user1`,
			NOTIFICATION_NOTIFICATION: `${BASE_URL_2}/Menu/Notifications/user2`,
			LIKE: `${BASE_URL_1}/Globals/Jaime/user1`,
			CART: `${BASE_URL_2}/Menu/Paniers/user1`,
			AUTOCOMPLETE: `${BASE_URL_2}/Global/Recherche/autoComplete`,
			SEARCH: `${BASE_URL_2}/Global/Recherche/getResult`
		} :
		{
			HOME_SUGGESTION: `${BASE_URL_2}/Home/Suggestions/user2`,
			HOME_PRODUCT: `${BASE_URL_2}/Home/Produits/user2`,
			HOME_ARTICLE: `${BASE_URL_1}/Global/Articles/user`,
			HOME_BRAND: `${BASE_URL_1}/Global/Marques/user`,
			HOME_SHOP: `${BASE_URL_1}/Global/Centres/user`,
			PRODUCT_SUGGESTION: `${BASE_URL_2}/Produit/Suggestions/user2`,
			PRODUCT_PRODUCT: `${BASE_URL_2}/Produit/Produits/user2`,
			ARTICLE_ARTICLE: `${BASE_URL_1}/Global/Articles/user`,
			BRAND_SUGGESTION: `${BASE_URL_1}/Marque/Suggestions/user1`,
			BRAND_BRAND: `${BASE_URL_1}/Global/Marques/user`,
			SHOP_SHOP: `${BASE_URL_1}/Global/Centres/user`,
			SHOP_SUGGESTION: `${BASE_URL_2}/Home/Suggestions/user2`,
			ACTIVITY_ACTIVITY: `${BASE_URL_2}/Menu/Activites/user2`,
			NOTIFICATION_NOTIFICATION: `${BASE_URL_2}/Menu/Notifications/user2`,
			LIKE: `${BASE_URL_2}/Globals/Jaime/user2`,
			CART: `${BASE_URL_2}/Menu/Paniers/user2`,
			AUTOCOMPLETE: `${BASE_URL_2}/Global/Recherche/autoComplete`,
			SEARCH: `${BASE_URL_2}/Global/Recherche/getResult`
		}
	}
	catch (error) {
		alert(error)
	}
}

export async function getUserInfo() {
	const userId = await AsyncStorage.getItem('userId')
	return userId === 'kevin' ? "Jonathan Kevin" : "Santatra Nomenjanahary"
}

export default function getData(url) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => alert(error))
}
