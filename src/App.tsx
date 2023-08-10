import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryApi from './Components/CountryApi'; 
import CountryDetails from './Pages/CountryDetails';
import HomePage from './Pages/HomePage';
import './Styles/App.css'
import Nav from './Components/Nav';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App.css'>
        <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
