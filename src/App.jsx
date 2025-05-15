import { useState } from 'react'
import './App.css'
import Button from './components/GlowButton'
import TypeWriter from './components/TypeWriter'

export default function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <h1>Ben Shupe</h1>
      <div className="card">
        <Button color="White" children="ONE" />
        <Button color="red" children="TWO" />
      </div>
      <h2><TypeWriter preText="I'm " type_list={["a Student", "a Web Developer", "a Team Member"]} pause={2000} /></h2>
    </>
  )
}