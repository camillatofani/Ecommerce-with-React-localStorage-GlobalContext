import styles from './CategoryBar.module.css'

function CategoryBar() {
	return (
		<div className={ styles.categoryBar }>
			<div className={styles.title}>Categorie</div>
			<a href='#' className={styles.single}>Display</a>
			<a href='#' className={styles.single}>Tastiere</a>
			<a href='#' className={styles.single}>Mouse</a>
			<a href='#' className={styles.single}>Microfoni</a>
		</div>
	)
}

export default CategoryBar
