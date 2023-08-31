import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import CreateAccont from './components/CreateAccont'
import BasketPage from './components/BasketPage'

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccont' element={<CreateAccont />} />
        <Route path='/mybasket' element={<BasketPage />} />
      </Routes>
    </div>
  )
}

export default App
