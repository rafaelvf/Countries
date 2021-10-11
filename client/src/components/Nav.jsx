import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import fotohome from "../img/fotohome.jpg";
import activity from "../img/activity.png";
import aut from "../img/autdoor.png";

import "../css/Nav.css"

export function Nav() {
  return (
    <header className="navbar">
      <div>
        <div className="fotohome">
          <Link to="/countries">
          <img src={fotohome} alt="Home" className="foto" />
          </Link> 
        </div>
        
        <h1 className="titles">Countries of the world</h1>
        <SearchBar country={"country"} className="searchbar"/>
        
        {/* <span className="formcreation">Create activity</span> */}
        <Link to="/activity" className="creacion">
        <img src={aut} alt="Activity form" className="fotoAc" />
        </Link> 
      </div>
    
    </header>
  )
};

export default Nav;