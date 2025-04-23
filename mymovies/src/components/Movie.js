import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import NoImage from '../images/no_image.jpg'

//custom hook
import { useMovieFetch } from '../hook/useMovieFetch'
//components
import Spinner from "./spinar/Spinner"
import BreadCrumb from './BreadCrumb/BreadCrumb'
import MovieInfo from './MovieInfo/MovieInfo'
import Grid from './gird/Grid'
import MovieInfoBar from './MovieInfoBar/MovieInfoBar'
import Actor from './Actor/Actor'

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
      <MovieInfoBar
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      
      />
      <Grid header={state.actors.length === 1 ?'Actor' : 'Actors'}>
        {state.actors.map((actor) => (
          <div key={actor.credit_id}>
            <Actor
              image={actor.profile_path ? (`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              ) : (
                NoImage                
              )
              
              }
              name={actor.name}
              character={actor.character}
            />
          </div>

        ))}
        
      </Grid>
    </>
  )
}

export default Movie