import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'

export default function App() {
  const [count, setCount] = useState(1)

  return (
  <>
    <Navbar />
    <Home />
  </>
  )
}