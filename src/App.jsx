import Navbar from './components/Navbar/Navbar'
import CategoryBar from './components/CategoryBar/CategoryBar'
import Products from './components/Products/Products'
import { GlobalProviderComponent } from './GlobalContext'
import PersonComponent from './PersonComponent.jsx'

function App() {
	return (
		<>
			<GlobalProviderComponent>
				<Navbar />
				<CategoryBar />
				<Products />
				<PersonComponent />
			</GlobalProviderComponent>
		</>
	)
}

export default App
