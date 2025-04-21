import React from 'react'
//styles
import { Wrapper, Content, Text } from './styles'
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import NoImage from '../../images/no_image.jpg'

// componetns
import Thump from '../thump/Thump'
import Explosion from '../Explosion/Explosion'

const MovieInfo = ({ movie }) => (
  
  <Wrapper backdrop={movie.backdrop_path} >
    <Content>
      <Thump
        image={movie.poster_path ?
          `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
          : NoImage
        }
        clickable={false}
     />
      <Text>
        <h1>{movie?.title ? 'Movie Title:' : ''} {movie.title}</h1>
        {movie?.original_language ? 'Movie Language:' : ''}{' '}
        {movie?.original_language
        ? movie.original_language.charAt(0).toUpperCase() + movie.original_language.slice(1) // checks if movie has original language if it has it changes is the first charcater and keep the rest of the character as it is.
          : ''}
        <p>{movie?.adult? 'Classification: PG': '' }</p> 
        <h4>{movie?.release_date? 'Movie Release Date:': ''} { movie.release_date}</h4>
        <p>{movie.overview}</p>
        
        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className='score'>
              {movie.vote_average > 5 ? (
              <>
                  {movie.vote_average}
                  <Explosion />
              </>
            ) : (
                <>
                  {movie.vote_average}                

                </>
            ) }
             </div>
          </div>
        </div>
        <div className='director'>
          
          <div>
            <h3>Director{movie.directors.length > 1 ? 's' : ''} : </h3>
            <ul>
            {movie.directors.map((director) => (
               <li key={director.credit_id}> {director.name}</li>       
            ))}
          </ul>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
  


)


export default MovieInfo