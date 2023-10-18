import PropTypes from 'prop-types'
import styles from './SingleProduct.module.css'
import img from './../../assets/images/smartphone.jpg';

function SingleProduct({ id, text, brand, price, addItem }) {
	function selectProduct() {
		addItem(id)
	}

	return (
		<div className={ styles.singleProduct }>
			<div>{ text }</div>
			<div><img src={ img } /></div>
			<div className={styles.bottom}>
				<button data-id={ id } className='primary' onClick={selectProduct}>Add</button>
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
	price: PropTypes.number.isRequired
};


export default SingleProduct
