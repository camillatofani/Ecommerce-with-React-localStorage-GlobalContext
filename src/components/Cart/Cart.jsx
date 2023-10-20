import Title from './../../components/BigTitle/BigTitle'
import CartEmpty from './../../components/CartEmpty/CartEmpty'
import CartLists from './../../components/CartLists/CartLists'
import styles from './Cart.module.css'
import { useGlobalContext } from './../../GlobalContext'

function Cart() {
	const { cart } = useGlobalContext()

	return (
		<div className={ styles.cart }>
			<Title title={ 'Cart' } />
			<div className={ styles.container }>
				{ cart.length > 0
					? <CartLists />
					: <CartEmpty />
				}
			</div>
		</div>
	)
}

export default Cart
