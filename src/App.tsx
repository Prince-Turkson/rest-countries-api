import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import './App.css';
import HomePage from './Pages/HomePage';
import CountryApi from './Components/CountryApi';

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries" element={<CountryApi searchQuery={searchQuery} selectedRegion={selectedRegion} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
