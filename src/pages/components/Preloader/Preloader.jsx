import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="Preloader">
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Preloader;