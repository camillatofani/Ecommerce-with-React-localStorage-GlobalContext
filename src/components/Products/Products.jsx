import styles from './Products.module.css'
import SingleProduct from './../SingleProduct/SingleProduct'

function Products() {
	const products = [
		{
			id: 1,
			name: 'iPhone',
			brand: 'Apple',
			price: '799.90'
		},
		{
			id: 2,
			name: 'Tastiera',
			brand: 'Samsung',
			price: '19.90'
		},
		{
			id: 3,
			name: 'Nome',
			brand: 'Samsung',
			price: '19.90'
		}
	]

	return (
		<div className={ styles.products }>
			{
				products.map((product) => (
					<SingleProduct key={ product.id } id={ product.id } text={ product.name } brand={ product.brand } price={ product.price } />
				))
			}
		</div>
	)
}

export default Products
