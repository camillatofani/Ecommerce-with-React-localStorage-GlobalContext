import ReactDOM from 'react-dom/client'
import App from './App'
import CartPage from './pages/CartPage/CartPage'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalProviderComponent } from './GlobalContext'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "cart",
		element: <CartPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<GlobalProviderComponent>
		<RouterProvider router={ router } />
	</GlobalProviderComponent>,
)
