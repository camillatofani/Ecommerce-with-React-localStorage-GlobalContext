import { Link } from 'react-router-dom'
import styles from './CartEmpty.module.css'

function CartEmpty() {
	return (
		<>
			<p>The cart is empty</p>
			<Link to='/'><button className={ 'secondary ' + styles.cartEmptyBtn }>Go to the shop</button></Link>
		</>
	)
}

export default CartEmpty
