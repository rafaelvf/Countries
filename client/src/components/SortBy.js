import React from 'react';
import {connect} from "react-redux";
import { sortByAlphabet } from '../actions/actions';
import "../css/Sortby.css";

export function SortBy(props){
    
    
    const handleOnClick=(e)=>{
        e.preventDefault();
        props.sortByAlphabet(props.type)
    } 

    return(
        
        <div className="sortaz">
        <button onClick={(e)=>handleOnClick(e)}>{props.type}</button>    
        </div>
        
        
    )

}

function mapDispatchToProps(dispatch){

    return{sortByAlphabet:(e)=>dispatch(sortByAlphabet(e))}
}

export default connect(null,mapDispatchToProps)(SortBy);