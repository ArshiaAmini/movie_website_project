import React from 'react';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Movie from './components/Movie';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <>
     <Header />
     <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Movie />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
      </>
  );
}

export default App;
