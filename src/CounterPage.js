import React from 'react'
import Container from "./Components/Container/container"
import { useState } from 'react'

const CounterPage = () => {
  
  const [num, setNum] = useState(5)

  const minus2Handler = () => setNum(num - 2)
  const minus1Handler = () => setNum(num - 1)
  const plus1Handler = () => setNum(num + 1)
  
  const plus2Handler = () => {
    setNum(num + 2)
  }

  return (
    <Container>
      <h3>{num}</h3>
      <button onClick={minus2Handler}>-2</button>
      <button onClick={minus1Handler}>-1</button>
      <button onClick={plus1Handler}>+1</button>
      <button onClick={plus2Handler}>+2</button>
    </Container>
    
  )
}

export default CounterPage