import styles from './CartLists.module.css'
import PropTypes from 'prop-types'
import img from './../../assets/images/smartphone.jpg'

function CartLists({ cart, clearCart, removeItem }) {

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
	clearCart: PropTypes.func,
	removeItem: PropTypes.func,
	cart: PropTypes.object.isRequired
}


export default CartLists
