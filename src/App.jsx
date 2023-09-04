import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import CreateAccont from './components/CreateAccont'
import BasketPage from './components/BasketPage'
import { useState } from 'react'
import { Products } from './components/Products'

function App() {

  const [products, setProducts] = useState(Products);
  const [count, setCount] = useState(0);

  const handleCount = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, count: (product.count || 0) + 1 }
        : product
    );
    setProducts(updatedProducts)
  }

  const totalItemCount = products.reduce((total, product) => total + (product.count || 0), 0);

  const totalItemPrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += (product.count || 0) * parseFloat(product.price)
    });
    return totalPrice;
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<HomePage handleCount={handleCount} totalItemCount={totalItemCount} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccont' element={<CreateAccont />} />
        <Route path='/mybasket' element={<BasketPage products={products} count={count} totalItemPrice={totalItemPrice} />} />
      </Routes>
    </div>
  )
}

export default App
