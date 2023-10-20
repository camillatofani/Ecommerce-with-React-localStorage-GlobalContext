import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {

	return (
		<nav>
			<div><Link to='/'>Home</Link></div>
			<div className={ styles.logo }>FRICA</div>
			<div><Link to='/cart'>0 <FontAwesomeIcon icon={ faCartShopping } /></Link></div>
		</nav>
	)
}

export default Navbar
