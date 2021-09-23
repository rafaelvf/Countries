import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import fotohome from "../img/fotohome.jpg";

export function Nav() {
  return (
    <header className="navbar">
      <div>
        <div>
    <Link to="/countries">
      <img src={fotohome} alt="Home" width="50" height="60" />
     </Link> 
        </div>
    
    <SearchBar country={"country"} />

    <Link to="/activity">
      Creacion de actividades
     </Link> 
      </div>
    
    </header>
  )
};

export default Nav;