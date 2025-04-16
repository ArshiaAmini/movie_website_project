import React from 'react'
import Logoimage from '../../images/react-movie-logo.svg'
import Tmdblogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImg, TmdbImg } from './styles'



const Header = () => (

  <Wrapper>
    <Content>
      <LogoImg src={Logoimage} alt ="Logo-image"/>
      <TmdbImg src={Tmdblogo} alt ="Tmdb-image" />
    </Content>
  </Wrapper>



)

export default Header