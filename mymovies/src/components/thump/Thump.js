import React from 'react'
import { Link, useParams } from 'react-router-dom'

// styles
import {Image } from './styles'



const Thump = ({ image, movieId, clickable }) => (
  <Link to={`${movieId}`}>
    <Image src={image} alt="Movie-image" />
  </Link>



)

export default Thump