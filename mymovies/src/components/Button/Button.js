import React from 'react'
import { Wrapper } from './styles.js'

const Button = ({text, callback}) => (

  <Wrapper onClick={callback} type='button'>
    {text}
  </Wrapper>


)

export default Button