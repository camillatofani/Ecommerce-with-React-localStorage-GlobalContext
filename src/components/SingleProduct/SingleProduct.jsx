import styles from './SingleProduct.module.css'
import img from './../../assets/images/smartphone.jpg';

function SingleProduct() {
	return (
		<div className={ styles.singleProduct }>
			<div>Nome</div>
			<div><img src={ img } /></div>
			<div className={styles.bottom}>
				<button className='primary'>Add</button>
				<div>Samsung</div>
				<div>19,90€</div>
			</div>
		</div>
	)
}

export default SingleProduct
