import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import fotohome from "../img/fotohome.jpg";
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
    
        <SearchBar country={"country"} className="searchbar"/>

        <Link to="/activity">
          Creacion de actividades
        </Link> 
      </div>
    
    </header>
  )
};

export default Nav;