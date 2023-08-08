import React from 'react';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import CountryApi from './Components/CountryApi';



import './App.css';



function App() {

  return (
    <div className="App" >
     <Nav />
     <SearchBar />
    <CountryApi />
    </div>
  );
}

export default App;
