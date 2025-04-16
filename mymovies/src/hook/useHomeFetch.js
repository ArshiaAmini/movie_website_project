import { useEffect, useRef, useState } from "react"

import API from '../API'

// sets the state to these values
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results:0
}


// custome fetch function
export const useHomeFetch = () => {
  
  const [state, setState] = useState(initialState); // state is set to initialState
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false)
 
  const fetchMovies = async (page, searchTerm = "") => {
      
    try {
      setError(false);
      setLoading(true);
      const data = await API.fetchMovies(searchTerm, page); // fetch searchTerm from the backend
      
      // setState(prev => ({
      //   ...data,
      //   results:
      //     page > 1 ? [...prev.results, ...data.results] : [...data.results]

      // }))

      setState(prev => ({
        ...data, // copy the fetched data into previous state 
        results: 
          page > 1 ? [...prev.results, ...data.results] : [...data.results] // if there is more than one page it takes the old results and append the new pages into it. otherwise it returns whatever it has into the state
      }));
               
    } catch (error) {
      setError(true);
      console.log("fetch error: ", error.message)
         
    }
    finally {
      setLoading(false)
    }
  
  };

  useEffect(() => {
    setState(initialState)
    fetchMovies(1, searchTerm);

  }, [searchTerm]); // fetchMOvies upon laoding the page for the first time.

  //useEffect for loading button
  useEffect(() => {

    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm) 
    setIsLoadingMore(false)
    
  },[isLoadingMore, state.page, searchTerm])


  
  return { state, error, loading, fetchMovies,setSearchTerm, searchTerm, isLoadingMore, setIsLoadingMore } // passes these stats and fetchfunction so we can use it whenever we need it inside any component

}

