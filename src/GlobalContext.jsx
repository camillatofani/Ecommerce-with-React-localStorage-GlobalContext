import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()
const GlobalProvider = GlobalContext.Provider

export function useGlobalContext() {
	return useContext(GlobalContext)
}

export function GlobalProviderComponent({ children }) {
	// Products list
	const products = [
		{
			id: 1,
			name: 'iPhone 15',
			brand: 'Apple',
			price: 979.00,
			category: 'smartphone'
		},
		{
			id: 2,
			name: 'Galaxy A33',
			brand: 'Samsung',
			price: 249.00,
			category: 'smartphone'
		},
		{
			id: 3,
			name: 'GPRO',
			brand: 'Logitech',
			price: 99.99,
			category: 'tastiere'
		}
	]

	const categories = []
	for (const product of products) {
		if (!categories.includes(product.category)) {
			categories.push(product.category)
		}
	}

	// Cart inital state
	var initialStateCart = JSON.parse(localStorage.getItem('cart')) || []
	const [cart, setCart] = useState(initialStateCart)
	// ---- Function
	// Add item cart
	const addItem = (item) => {
		const newCart = products.filter((cartItem) => {
			if (cartItem.id === item) {
				return cartItem
			}
		})
		if (initialStateCart.length > 0) {
			const updatedCart = [...initialStateCart, newCart[0]]
			localStorage.setItem('cart', JSON.stringify(updatedCart))
		} else {
			localStorage.setItem('cart', JSON.stringify(newCart))
		}
		setCart((old) => { return [...old, newCart[0]] })
	}
	// Remove item from cart
	function removeItem(item) {
		console.log(item)
		let newCart = cart.filter((cartItem) => cartItem.id !== item)
		setCart(newCart)
		const lists = JSON.parse(localStorage.getItem('cart'))
		if (lists) {
			localStorage.setItem('cart', JSON.stringify(newCart))
		}
	}
	// Clear cart
	const clearCart = () => {
		localStorage.removeItem('cart')
		setCart([])
	}

	// Global Values
	const globalValues = {
		// Products
		products,
		categories,
		// Cart
		cart,
		addItem,
		removeItem,
		clearCart,
	}

	return <GlobalProvider value={ globalValues }>{ children }</GlobalProvider>
}

GlobalProviderComponent.propTypes = {
	children: PropTypes.any
}
