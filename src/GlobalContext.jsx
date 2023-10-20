import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const GlobalContext = createContext()
const GlobalProvider = GlobalContext.Provider

export function useGlobalContext() {
	return useContext(GlobalContext)
}

export function GlobalProviderComponent({ children }) {
	const [people, setPeople] = useState(['marta'])
	const [products, setProducts] = useState([])

	const addPerson = (name) => {
		setPeople([...people, name])
	}

	const addProduct = (productName) => {
		setProducts([...products, productName])
	}

	const globalValues = {
		people,
		products,
		addPerson,
		addProduct,
	}

	return <GlobalProvider value={ globalValues }>{ children }</GlobalProvider>
}

GlobalProviderComponent.propTypes = {
	children: PropTypes.any
}
