import React from 'react'
import { Wrapper, Content } from './styles'

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children }</Content>
    </Wrapper>
  
)


export default Grid