// App.jsx
import './App.css'
import { RouterProvider } from 'react-router'
import { ProductList } from './components/product-list'

import { router } from './routes'

function App() {
  return (
    <ProductList> <RouterProvider router={router} /> </ProductList>
  )
}

export default App  
