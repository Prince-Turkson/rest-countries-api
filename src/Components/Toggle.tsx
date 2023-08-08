import React from 'react';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
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
           {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode/> } 
           {darkMode ? <span>Dark Mode</span> : <span>Light Mode</span>}
         
        </button>


        </div>
    )
}

export default Toggle;