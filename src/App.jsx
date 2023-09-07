import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import CreateAccont from './components/CreateAccont'
import BasketPage from './components/BasketPage'
import { useState } from 'react'
import { Products } from './components/Products'
import LikePage from './components/LikePage'

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

  const basketClear = () => {
    setProducts(Products)
  }

  const handleDelete = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: 0 };
      }
      return product
    });
    setProducts(updatedProducts);
  }

  const [likeCount, setLikeCount] = useState(0);

  const handleLikeItem = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, likeCount: (product.likeCount || 0) + 1 }
        : product
    );
    setProducts(updatedProducts)
  }

  const handleDeleteLike = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, likeCount: 0 };
      }
      return product
    });
    setProducts(updatedProducts);
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<HomePage handleLikeItem={handleLikeItem} handleCount={handleCount} totalItemCount={totalItemCount} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccont' element={<CreateAccont />} />
        <Route path='like' element={<LikePage handleDeleteLike={handleDeleteLike} products={products} handleLikeItem={handleLikeItem} />} />
        <Route path='/mybasket' element={<BasketPage products={products} count={count} totalItemPrice={totalItemPrice} basketClear={basketClear} handleDelete={handleDelete} />} />
      </Routes>
    </div>
  )
}

export default App
