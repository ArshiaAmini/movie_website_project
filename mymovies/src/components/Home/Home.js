import React from 'react'
import { useState, useEffect} from 'react'

// config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config'

// Hook
import { useHomeFetch } from '../../hook/useHomeFetch'

// Components
import HeroImage from '../heroImage/HeroImage'
import Grid from '../gird/Grid'
import Thump from '../thump/Thump'
import { Spinner } from '../spinar/styles'
import Search from '../SearchBar/Search'

// No Image
import NoImage from '../../images/no_image.jpg'

const Home = () => {
  const { state, error, loading,setSearchTerm,searchTerm } = useHomeFetch();
   
  return (
    <>
      {!searchTerm && state.results[0] ? // if the the search term exis and state.results[0] then hero part goes away
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          overview={state.results[0].overview}
        />
        : null}
      <Search setSearchTerm={setSearchTerm} />
      <Grid header = {searchTerm ? 'Search Result' : "Popular Movies"}> 
          {state.results.map(movies => (
          <Thump
              key={movies.id}
              clickable
              image={movies.backdrop_path ? 
                IMAGE_BASE_URL + POSTER_SIZE + movies.backdrop_path
                : NoImage
              }
              movieId={movies.id}              
            />
          
         )) }
       
      </Grid>
      <Spinner/>
       
    </>
  )

}

export default Home