import styles from './CartLists.module.css'
import { useGlobalContext } from './../../GlobalContext'

function CartLists() {
	const { cart, removeItem, clearCart } = useGlobalContext()

	return (
		<div>
			{
				cart.map((item, index) => (
					<div className={ styles.singleItem } key={ index }>
						<div className={styles.details}>
							<img src={ `/assets/images/${ item.brand.toLowerCase() }.jpg` } />
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

export default CartLists
