import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router,Route,Routes } from 'react-router-dom'
import login from './pages/login'
import signup from './pages/signup'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

      <Route path="/" element={login} />
      <Route path="/signup" element={signup} />
      <Route path="/dashboard" element={Home}/>
      
      </Routes>
    
    </Router>
  )
}

export default App
