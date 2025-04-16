import React from 'react';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyle';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle /> 
    </div>
  );
}

export default App;
