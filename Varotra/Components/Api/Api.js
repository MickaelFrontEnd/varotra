import { AsyncStorage } from 'react-native'

export async function getUrl() {
	try {
		const BASE_URL_1 = 'https://demo4311500.mockable.io'
		const BASE_URL_2 = 'https://demo0510995.mockable.io'
		const userId = await AsyncStorage.getItem('userId')
		// To be replaced by ===
		if (userId !== 'Kevin') {
			return {
				HOME_SUGGESTION: `${BASE_URL_1}/Home/Suggestions/user1`,
				HOME_PRODUCT: `${BASE_URL_1}/Home/Produits/user1`,
				HOME_ARTICLE: `${BASE_URL_1}/Home/Articles/user1`,
				HOME_BRAND: `${BASE_URL_1}/Home/Marques/user1`,
				HOME_SHOP: `${BASE_URL_1}/Home/Centres/user1`,
				LIKE: `${BASE_URL_1}/Globals/Jaime/user1`,
				CART: `${BASE_URL_2}/Menu/Paniers/user2`
			}
		}
	}
	catch (error) {
		alert(error)
	}
}

export default function getData(url) {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => alert(error))
}
