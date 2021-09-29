import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import fotohome from "../img/fotohome.jpg";
import form from "../img/form.png";
import cou from "../img/cou.png";
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
        
        <span className="titles">Countries of the world</span>
        <SearchBar country={"country"} className="searchbar"/>
        
        <span className="formcreation">Click on the form to create activity</span>
        <Link to="/activity" className="creacion">
        <img src={form} alt="Activity form" className="fotoAc" />
        </Link> 
      </div>
    
    </header>
  )
};

export default Nav;