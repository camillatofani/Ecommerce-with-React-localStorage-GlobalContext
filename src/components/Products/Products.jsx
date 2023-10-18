import styles from './Products.module.css'
import SingleProduct from './../SingleProduct/SingleProduct'

function Products() {
	return (
		<div className={ styles.products }>
			<SingleProduct />
			<SingleProduct />
			<SingleProduct />
			<SingleProduct />
		</div>
	)
}

export default Products
