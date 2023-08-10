import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../Styles/BackButton.css';
import { Link } from 'react-router-dom';


const BackButton = () => {
  return (
    <div>
      <button className='bkBtn'>
          <Link to ='/' className="buttton-details">
               <div className="backArrow">
                <FiArrowLeft size= {18} color={'black'} />
               </div>
                <div className="buttonText">
                    <h4> Back</h4>
                </div>
          </Link>
      </button>
      
    </div>
  );
}

export default BackButton;
