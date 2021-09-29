import React, { useState } from 'react';
import {connect,useSelector} from "react-redux";
import {  getActivity } from '../actions/actions';
import "../css/filteractivities.css";

export function FilterByActivities(props) {
    const {everyCountry}=useSelector((state)=>state.allCountries)

    function change(e){
    
    props.getActivity(e.target.value)
    }
    console.log(everyCountry)

    const a=[];

return (    
    <div className="filter">
        <div className="filteractivity">
        <span className="filterr">Filter by Activities </span>
            <select  onChange={change}>
                
                {
                everyCountry.map(i=>{
                    if(i.activities){
                        for(const e of i.activities){
                        if(!a.includes(e.name)){
                            a.push(e.name)
                return <option value={e.name}>{e.name}</option>}}}
                        }
                )
                }
                
            </select>

        
        </div>
    </div>
    
    
)
};

function mapDispatchToProps(dispatch){

    return{getActivity:(state)=>dispatch(getActivity(state)),
     
    }
}

export default connect(null,mapDispatchToProps)(FilterByActivities);