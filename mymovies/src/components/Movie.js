import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

//custom hook
import { useMovieFetch } from '../hook/useMovieFetch'
//components
import Spinner from "./spinar/Spinner"
import BreadCrumb from './BreadCrumb/BreadCrumb'
import MovieInfo from './MovieInfo/MovieInfo'
import Grid from './gird/Grid'


const Movie = () => {
  const { id } = useParams()

  const { state, error, isLoading } = useMovieFetch(id)

  if (error) return <p>Something went wrong...</p>
  if (isLoading) return <Spinner/>

  return (
    <>
      <BreadCrumb original_title={state.original_title} />
        <MovieInfo
        movie={state}
      />
      <Grid>

      </Grid>
    </>
  )
}

export default Movie