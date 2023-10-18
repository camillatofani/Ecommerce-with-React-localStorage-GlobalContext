import styles from './Products.module.css'
import { useState } from 'react'
import SingleProduct from './../SingleProduct/SingleProduct'

function Products() {
	const [notify, setNotify] = useState(false)

	const products = [
		{
			id: 1,
			name: 'iPhone',
			brand: 'Apple',
			price: 799.90
		},
		{
			id: 2,
			name: 'Tastiera',
			brand: 'Samsung',
			price: 19.90
		},
		{
			id: 3,
			name: 'Nome',
			brand: 'Samsung',
			price: 19.90
		}
	]

	function addItem(id) {
		const item = products[id - 1];
		const lists = JSON.parse(localStorage.getItem('cart'));
		if (lists) {
			localStorage.setItem('cart', JSON.stringify([...lists, item]))
		} else {
			localStorage.setItem('cart', JSON.stringify([item]))
		}
		setNotify(true)
		setTimeout(() => setNotify(false), 2000);
	}

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

export default Products
