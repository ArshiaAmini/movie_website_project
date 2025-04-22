import React, { useEffect, useState, useRef } from 'react'
import { Wrapper, Content } from './styles'
import searchIcon from '../../images/search-icon.svg'

const Search = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const ref = useRef(true);

  useEffect(() => {
    sessionStorage.setItem('testKey', 'testValue');
  }, []);
  
  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='Search-icon' />
        <input
          type='text'
          value={state}
          onChange={(e) => setState(e.currentTarget.value)}
          placeholder='Search movie'
        />
      </Content>
    </Wrapper>
    
  )
}

export default Search