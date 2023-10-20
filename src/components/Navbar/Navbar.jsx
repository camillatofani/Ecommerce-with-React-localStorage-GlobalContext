import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './../../GlobalContext'

function Navbar() {
	const { cart } = useGlobalContext()

	return (
		<nav>
			<div><Link to='/'>Home</Link></div>
			<div className={ styles.logo }>FRICA</div>
			<div><Link to='/cart'>{ cart.length }<FontAwesomeIcon icon={ faCartShopping } /></Link></div>
		</nav>
	)
}

export default Navbar
