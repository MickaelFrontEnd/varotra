import { AsyncStorage } from 'react-native'

export async function getUrl() {
	try {
		const BASE_URL_1 = 'https://demo4311500.mockable.io'
		const BASE_URL_2 = 'https://demo0510995.mockable.io'
		const userId = await AsyncStorage.getItem('userId')
		if (userId === 'kevin') {
			return {
				HOME_SUGGESTION: `${BASE_URL_1}/Home/Suggestions/user1`,
				HOME_PRODUCT: `${BASE_URL_1}/Home/Produits/user1`,
				HOME_ARTICLE: `${BASE_URL_1}/Home/Articles/user1`,
				HOME_BRAND: `${BASE_URL_1}/Home/Marques/user1`,
				HOME_SHOP: `${BASE_URL_1}/Home/Centres/user1`,
				PRODUCT_SUGGESTION: `${BASE_URL_1}/Produit/Suggestions/user1`,
				PRODUCT_PRODUCT: `${BASE_URL_1}/Produit/Produits/user1`,
				ARTICLE_ARTICLE: `${BASE_URL_1}/Article/Articles/user1`,
				BRAND_SUGGESTION: `${BASE_URL_1}/Marque/Suggestions/user1`,
				BRAND_BRAND: `${BASE_URL_1}/Home/Marques/user1`,
				SHOP_SHOP: `${BASE_URL_1}/Home/Centres/user1`,
				SHOP_SUGGESTION: `${BASE_URL_1}/Home/Suggestions/user1`,
				LIKE: `${BASE_URL_1}/Globals/Jaime/user1`,
				CART: `${BASE_URL_2}/Menu/Paniers/user2`,
			}
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