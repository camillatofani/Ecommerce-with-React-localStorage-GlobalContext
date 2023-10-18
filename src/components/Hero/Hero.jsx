import styles from './Hero.module.css'
import computer from './../../assets/images/hero_computer.png'

function Hero() {
	return (
		<div className={ styles.hero }>
			<div className={styles.border}>
				<div className={ styles.title }>Big Sale Offer</div>
				<img src={ computer } />
				<div className={ styles.touchpoint }>
					<button className='primary'>Buy Now</button>
					<button className='secondary'>Contact Us</button>
				</div>
			</div>
		</div>
	)
}

export default Hero
