import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
	return (
		<nav>
			<div>Navbar</div>
			<div className={styles.logo}>FRICA</div>
			<div><FontAwesomeIcon icon={ faCartShopping } /></div>
		</nav>
	)
}

export default Navbar
