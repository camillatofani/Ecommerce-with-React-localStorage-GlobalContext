import Navbar from './components/Navbar/Navbar'
import CategoryBar from './components/CategoryBar/CategoryBar'
import Products from './components/Products/Products'
import { GlobalProviderComponent } from './GlobalContext'

function App() {
	return (
		<>
			<GlobalProviderComponent>
				<Navbar />
				<CategoryBar />
				<Products />
			</GlobalProviderComponent>
		</>
	)
}

export default App
