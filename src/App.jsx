import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import CreateAccont from './components/CreateAccont'

function App() {


  return (
    <div>
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccont' element={<CreateAccont />} />
      </Routes>
    </div>
  )
}

export default App
