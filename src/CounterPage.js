import React from 'react'
import Container from "./Components/Container/container"
import { useState } from 'react'

const CounterPage = () => {
  const initialNum = 5
  const [num, setNum] = useState(initialNum)

  const minus5Handler = () => setNum(num - 5)
  const minus2Handler = () => setNum(num - 2)
  const minus1Handler = () => setNum(num - 1)
  const plus1Handler = () => setNum(num + 1)
  const plus2Handler = () => setNum(num + 2)
  const plus5Handler = () => setNum(num + 5)

  const resetHandler = () => setNum(initialNum)

  const color = num < 5 ? 'red' : 'green'

  return (
    <Container>
      <h3 style={{color: color}}>{num}</h3>
      <button onClick={minus5Handler} disabled={num <= 5}>-5</button>
      <button onClick={minus2Handler} disabled={num <= 2}>-2</button>
      <button onClick={minus1Handler} disabled={num <= 1}>-1</button>
      <button onClick={resetHandler} >Reset</button>
      <button onClick={plus1Handler} disabled={num > 9}>+1</button>
      <button onClick={plus2Handler} disabled={num > 8}>+2</button>
      <button onClick={plus5Handler} disabled={num > 5}>+5</button>
    </Container>
    
  )
}

export default CounterPage