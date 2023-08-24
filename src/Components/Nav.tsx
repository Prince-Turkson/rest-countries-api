import React from 'react';
import '../Styles/navBar.css'
import Toggle from './Toggle';

const Nav = () => {
  return (
    <div className='navBar'>
        <nav>
            <h1>Where in the world?</h1>
        </nav>
        <Toggle />
    </div>
  );
}

export default Nav;
