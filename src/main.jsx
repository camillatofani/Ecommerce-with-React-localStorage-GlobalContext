import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './pages/Cart/Cart.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "cart",
		element: <Cart />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={ router } />,
)
