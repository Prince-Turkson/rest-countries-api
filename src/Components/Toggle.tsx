import React from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import '../Styles/button.css';


const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false)
    const ToogleChange = () =>{
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    
    useEffect(() => {
        
        document.documentElement.classList.toggle('dark-mode', darkMode);
      }, [darkMode]);
    
    return (
        <div>
        <button className='toogle-button' onClick={ToogleChange}>
           {darkMode ? <FaSun /> : <FaMoon /> } 
           {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
         
        </button>


        </div>
    )
}

export default Toggle;