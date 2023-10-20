import styles from './Products.module.css'
import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import SingleProduct from './../SingleProduct/SingleProduct'
import { useGlobalContext } from './../../GlobalContext'

function Products() {
	const { products, addItem } = useGlobalContext()
	const [queryParameters] = useSearchParams()

	const getCategory = () => {
		if (queryParameters.has('category')) {
			return queryParameters.get('category')
		}
	}
	const category = getCategory()
	var filteredProducts
	if (category) {
		filteredProducts = products.filter(product => product.category !== category)
	} else {
		filteredProducts = products
	}

	return (
		<div className={ styles.products }>
			{
				filteredProducts.map((product) => (
					<SingleProduct addItem={ () => addItem(product.id) } key={ product.id } id={ product.id } text={ product.name } brand={ product.brand } price={ product.price } />
				))
			}
		</div>
	)
}


Products.propTypes = {
	setItemCount: PropTypes.func
}

export default Products
