import React from 'react'
import { Button } from "@chakra-ui/react"
import { increment, decrement, reset } from '../Store/Actions'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {

  const count = useSelector(state => state.count)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className='counter-wrapper'>
      <div className='count'>
        <span>
          {count}
        </span>
      </div>
      <div className='button-group'>
        <Button size="lg" colorScheme="blue" onClick={handleIncrement}>Increment</Button>
        <Button size="lg" colorScheme="blue" onClick={handleDecrement}>Decrement</Button>
        <Button size="lg" colorScheme="blue" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

export default Counter
