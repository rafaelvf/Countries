import React from 'react';
import {connect} from "react-redux";
import { sortByPopulation } from '../actions/actions';
import "../css/Sortbypopulation.css";

export function SortByPopulation(props){
    
    
    const handleOnClick=(e)=>{
        e.preventDefault();
        props.sortByPopulation(props.population)
    } 

    return(
        
        <div className="sortbypop">
        <button onClick={(e)=>handleOnClick(e)}>{props.population}</button>    
        </div> 
        
    )

}

function mapDispatchToProps(dispatch){

    return{sortByPopulation:(e)=>dispatch(sortByPopulation(e))}
}

export default connect(null,mapDispatchToProps)(SortByPopulation);