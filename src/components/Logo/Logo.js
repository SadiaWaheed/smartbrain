import React from "react";
import Tilt from "react-parallax-tilt";
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{max:55}} style={{height: 100, width: 100 }}> 
        <div className="pa3" >
          <img alt="logo" src={brain} style={{paddingTop:'5px'}}/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
