import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import { Wrapper, Content, Text } from './styles'

const BreadCrumb = ({original_title}) => (
  <Wrapper>
    <Content>
         <Link to='/'>
          <span>Home</span>
        </Link>
      <span style={{ margin: '0 10px', }}>|</span>
         <span>{original_title? original_title :'No Found with the ID'}</span>  
    </Content>
  </Wrapper>


)

export default BreadCrumb