import styles from './CategoryBar.module.css'
import { useGlobalContext } from './../../GlobalContext'
import { Link } from 'react-router-dom'

function CategoryBar() {
	const { categories } = useGlobalContext()

	return (
		<div className={ styles.categoryBar }>
			<div className={ styles.title }>Categorie</div>
			<div className={ styles.single }><Link to='/'>All categories</Link></div>
			{ categories.map((category, index) => (
				<div key={ index } className={ styles.single }>
					<Link to={ `/?category=${ category }` }>{category}</Link>
				</div>
			))}
		</div>
	)
}

export default CategoryBar
