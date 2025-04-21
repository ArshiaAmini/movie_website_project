import { useState, useEffect } from "react";
import API from '../API';


export const useMovieFetch = (id) => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {

    const fetchMovie = async () => {

      try {
        setError(false)
        setIsLoading(true)

        if (!id) {
          throw new Error("ID is not valid")
        }
        const movieById = await API.fetchMovie(id);
        const credits = await API.fetchCredits(id);
        
        if (credits?.crew) {
          const directors = credits.crew.filter(
            member => member.job === 'Director');
            setState({
              ...movieById,
              actors: credits.cast || [],
              directors
            });
          
        } else {
          console.log('--->',credits)
        }
   

      } catch (error) {
        setError(true);
        console.log('Fetch Error:', error.message)
      }
      finally {
        setIsLoading(false); 
      }
    }
    
  fetchMovie();

},[id])


return {state,error,isLoading}
}