import PropTypes from 'prop-types'
import styles from './BigTitle.module.css'

function BigTitle({ title }) {
	return (
		<h1 className={ styles.bigTitle }>{title}</h1>
	)
}

BigTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default BigTitle
