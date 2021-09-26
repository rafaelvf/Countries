import React, { useState } from 'react';
import {connect} from "react-redux";
import {  getCountry, getAll } from '../actions/actions';

export function SearchBar(props) {
    const [term,setTerm]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        props.getCountry(term)
    }
    const handleReset=(e)=>{
        e.preventDefault();
        props.getcountries()
    }

return (    
    <div>
    <form onSubmit={submitHandler}>
    <input type="search" value={term} placeholder="Search by country  ..." onChange={(e)=>setTerm(e.target.value)} />
    <button type="submit">Search</button>
    </form>
    <button onClick={(e)=>handleReset(e)}>
        Reset all countries
    </button>
    </div>
    
    
)
};

function mapDispatchToProps(dispatch){

    return{getCountry:(term)=>dispatch(getCountry(term)),
            getcountries:()=>dispatch(getAll())       
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);