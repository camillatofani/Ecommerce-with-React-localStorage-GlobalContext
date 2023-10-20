import styles from './Cart.module.css'
import Navbar from './../../components/Navbar/Navbar'
import Title from './../../components/BigTitle/BigTitle'
import CartEmpty from './../../components/CartEmpty/CartEmpty'
import CartLists from './../../components/CartLists/CartLists'
import { useState } from 'react'

function Cart() {
	const savedCart = localStorage.getItem('cart')
	const listCart = savedCart ? JSON.parse(savedCart) : []
	const [cart, setCart] = useState([...listCart])

	function clearCart() {
		localStorage.removeItem('cart')
		setCart([])
	}

	function removeItem(item) {
		console.log(item)
		let newArray = cart.filter((cartItem) => cartItem.id !== item)
		setCart(newArray)
		const lists = JSON.parse(localStorage.getItem('cart'))
		if (lists) {
			localStorage.setItem('cart', JSON.stringify(newArray))
		}
	}

	return (
		<>
			<Navbar />
			<div className={ styles.cart }>
				<Title title={ 'Cart' } />
				<div className={ styles.container }>
					{ cart.length > 0
						? <CartLists cart={ cart } clearCart={ clearCart } removeItem={ removeItem } />
						: <CartEmpty />
					}
				</div>
			</div>
		</>
	)
}

export default Cart
