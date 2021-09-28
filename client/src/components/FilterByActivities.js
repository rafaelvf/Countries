import React, { useState } from 'react';
import {connect,useSelector} from "react-redux";
import {  getActivity } from '../actions/actions';

export function FilterByActivities(props) {
    const {everyCountry}=useSelector((state)=>state.allCountries)

    function change(e){
    
    props.getActivity(e.target.value)
    }
    console.log(everyCountry)

return (    
    <div className="filter">
        <div className="filteractivity">
            Filter by Activities
            <select  onChange={change}>
                
                {everyCountry.map(i=>{
                    if(i.activities){
                        for(const e of i.activities){

                return <option value={e.name}>{e.name}</option>}}
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