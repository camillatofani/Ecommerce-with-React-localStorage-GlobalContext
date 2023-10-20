import styles from './Products.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import SingleProduct from './../SingleProduct/SingleProduct'
import { useGlobalContext } from './../../GlobalContext'

function Products() {
	const [notify, setNotify] = useState(false)
	const { products, addItem } = useGlobalContext()

	return (
		<div>
			<div className={ styles.products }>
				{
					products.map((product) => (
						<SingleProduct addItem={ () => addItem(product.id) } key={ product.id } id={ product.id } text={ product.name } brand={ product.brand } price={ product.price } />
					))
				}
			</div>
			{ notify && <div>Add!</div> }
		</div>
	)
}


Products.propTypes = {
	setItemCount: PropTypes.func
}

export default Products
