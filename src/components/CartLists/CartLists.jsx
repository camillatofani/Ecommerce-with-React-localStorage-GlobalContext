import styles from './CartLists.module.css'
import PropTypes from 'prop-types'
import img from './../../assets/images/smartphone.jpg'
import { useGlobalContext } from './../../GlobalContext'

function CartLists({ removeItem }) {
	const { cart, clearCart } = useGlobalContext()

	return (
		<div>
			{
				cart.map((item, index) => (
					<div className={ styles.singleItem } key={ index }>
						<div className={styles.details}>
							<img src={ img } />
							<div className={styles.text}>
								<p className={ styles.name }>{ item.name }</p>
								<p className={ styles.brand }>{ item.brand }</p>
							</div>
						</div>
						<div>
							<button className='primary' onClick={ () => removeItem(item.id) }>Delete</button>
						</div>
					</div>
				))
			}
			<button onClick={ clearCart } className={ 'secondary ' + styles.cartListsBtn }>Clear cart</button>
		</div>
	)
}

CartLists.propTypes = {
	removeItem: PropTypes.func
}


export default CartLists
