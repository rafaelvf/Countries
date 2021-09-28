import React, { useState } from 'react';
import {connect} from "react-redux";
import {  getContinent,getAll } from '../actions/actions';

export function FilterBy(props) {
    
    function change(e){
    if(e.target.value==="All")
    {props.getcountries()}
    else
    {props.getContinent(e.target.value)}
    }


return (    
    <div className="filt">
        <div className="filtercontinet">
            Filter by continent
            <select  onChange={change}>
                <option value="All">All</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Polar">Polar</option>
            </select>
        </div>
    </div>
    
    
)
};

function mapDispatchToProps(dispatch){

    return{getContinent:(state)=>dispatch(getContinent(state)),
        getcountries:()=>dispatch(getAll())  
    }
}

export default connect(null,mapDispatchToProps)(FilterBy);