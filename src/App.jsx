// App.jsx
import './App.css'
import { RouterProvider } from 'react-router'
import { ProductList } from './components/product-list'
import { CartList } from './components/cart-list'

import { router } from './routes'

function App() {
  return (
    <ProductList> <CartList> <RouterProvider router={router} /> </CartList> </ProductList>
  )
}

export default App  
