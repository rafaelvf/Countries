import React, { useState } from 'react';
import {connect} from "react-redux";
import {  getCountry } from '../actions/actions';

export function SearchBar(props) {
    const [term,setTerm]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        props.getCountry(term)
    }

return (    
    <div>
    <form onSubmit={submitHandler}>
    <input type="search" value={term} placeholder="Search by country  ..." onChange={(e)=>setTerm(e.target.value)} />
    <button type="submit">Search</button>
    </form>
    </div>
    
    
)
};

function mapDispatchToProps(dispatch){

    return{getCountry:(term)=>dispatch(getCountry(term))}
}

export default connect(null,mapDispatchToProps)(SearchBar);