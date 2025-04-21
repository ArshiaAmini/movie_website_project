import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './NotFound.styles'


export const NotFound = () => {
  return (
    <Wrapper>
      <div>Page not found!😉</div>
      <Link to ='/'>Go to home page🏡</Link>
    </Wrapper>
  )
}
