import React from 'react'
import {Wrapper, Content } from './styles'

const Actor = ({name, image,character}) => (

  <Wrapper >
    <Content
    src={image} alt='Actor-image'
    />
      <h3>{name}</h3>
    <p>{ character}</p>

  </Wrapper>
)

export default Actor