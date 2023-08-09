import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import '../Styles/button.css';

const Toggle = () => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const toggleChange = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div>
      <button className='toggle-button' onClick={toggleChange}>
        {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />} 
        {darkMode ? <span>Dark Mode</span> : <span>Light Mode</span>}
      </button>
    </div>
  );
};

export default Toggle;
