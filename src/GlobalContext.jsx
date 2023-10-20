import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()
const GlobalProvider = GlobalContext.Provider

export function useGlobalContext() {
	return useContext(GlobalContext)
}

export function GlobalProviderComponent({ children }) {
	const products = [
		{
			id: 1,
			name: 'iPhone',
			brand: 'Apple',
			price: 799.90
		},
		{
			id: 2,
			name: 'Tastiera',
			brand: 'Samsung',
			price: 19.90
		},
		{
			id: 3,
			name: 'Nome',
			brand: 'Xiaomi',
			price: 19.90
		}
	]
	var initialStateCart = JSON.parse(localStorage.getItem('cart')) || []
	const [cart, setCart] = useState(initialStateCart)
	console.log(initialStateCart)

	const addItemCart = (productId) => {
		const newItem = products.filter((elem) => {
			if (elem.id === productId) {
				return elem
			}
		})
		if (initialStateCart.length > 0) {
			const updatedCart = [...initialStateCart, newItem[0]]
			localStorage.setItem('cart', JSON.stringify(updatedCart))
		} else {
			localStorage.setItem('cart', JSON.stringify(newItem))
		}
		setCart((old) => { return [...old, newItem[0]] })
	}

	const clearCart = () => {
		localStorage.removeItem('cart')
		setCart([])
	}

	const globalValues = {
		products,
		cart,
		addItemCart,
		clearCart,
	}

	return <GlobalProvider value={ globalValues }>{ children }</GlobalProvider>
}

GlobalProviderComponent.propTypes = {
	children: PropTypes.any
}
