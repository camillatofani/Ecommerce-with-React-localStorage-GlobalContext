import PropTypes from 'prop-types'
import styles from './SingleProduct.module.css'
import { useState, useEffect } from 'react'

function SingleProduct({ id, text, brand, category, price, addItem }) {
	const [btn, setBtn] = useState(true)

	useEffect(() => {
		const lists = JSON.parse(localStorage.getItem('cart'))
		if (lists) {
			lists.forEach(item => {
				if (id === item.id) {
					setBtn(false)
				}
			})
		}
	})

	return (
		<div className={ styles.singleProduct }>
			<div>
				<div className={styles.name}>{ text }</div>
				<div className={ styles.category }>{ category.toUpperCase() }</div>
			</div>
			<div><img src={ `/assets/images/${ brand.toLowerCase() }.jpg` } /></div>
			<div className={styles.bottom}>
				<button data-id={ id } className='primary' onClick={ addItem } disabled={ !btn }>Add</button>
				<div>{ brand }</div>
				<div>{ price }€</div>
			</div>
		</div>
	)
}

SingleProduct.propTypes = {
	addItem: PropTypes.func,
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}


export default SingleProduct
