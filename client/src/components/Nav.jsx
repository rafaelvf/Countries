import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import fotohome from "../img/fotohome.jpg";
import form from "../img/form.png";
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
        
        <Link to="/activity" className="creacion">
        <img src={form} alt="Activity form" className="fotoAc" />
        </Link> 
      </div>
    
    </header>
  )
};

export default Nav;