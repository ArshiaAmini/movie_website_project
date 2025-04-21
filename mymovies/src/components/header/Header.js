import React from 'react'
import Logoimage from '../../images/react-movie-logo.svg'
import Tmdblogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TmdbImg } from './styles'
import {Link} from 'react-router-dom'



const Header = () => (

  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={Logoimage} alt ="Logo-image"/>
      </Link>
      <TmdbImg src={Tmdblogo} alt ="Tmdb-image" />
    </Content>
  </Wrapper>



)

export default Header