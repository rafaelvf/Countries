import React from 'react';
import { Link } from 'react-router-dom';
import fotomundo from "../img/fotomundo.jpg"
import sunset from "../img/sunset.jpeg";
import "../css/LandingPage.css";

export function LandingPage() {
  return (
    <div className="lan">
      {/* <h1 className="title">DISCOVER THE WORLD AS NEVER BEFORE</h1>     */}
      <button className="btn-home" placeholder="lsk">
        <Link to="/countries">
        <div className="home">HOME PAGE</div>
        </Link>
        </button>  
      <img src={fotomundo} alt="Foto del Planeta" className="fotola"/>
    </div>
  )
};

export default LandingPage;