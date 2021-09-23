import React from 'react';
import { Link } from 'react-router-dom';
import fotomundo from "../img/fotomundo.jpg"

export function LandingPage() {
  return (
    <div>
      <h1>DISCOVER THE WORLD AS NEVER BEFORE</h1>    
      <button className="btn-home">
        <Link to="/countries">
        HOME
        </Link>
        </button>  
      <img src={fotomundo} alt="Foto del Planeta"/>
    </div>
  )
};

export default LandingPage;