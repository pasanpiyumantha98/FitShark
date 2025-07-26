import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Home/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
