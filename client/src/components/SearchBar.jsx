import React from 'react';
import { Link } from 'react-router-dom';

export function SearchBar(props) {
return (    
    <div>
    <input type="search" placeholder="Search by {props.country} ..."></input>
    <button onClick={props.onSearch}>Search</button>
    </div>
    
    
)
};

export default SearchBar;