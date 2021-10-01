import React, { useEffect } from 'react';
import {connect,useSelector} from "react-redux";
import {  getActivity,getAllActivities } from '../actions/actions';
import "../css/filteractivities.css";

export function FilterByActivities(props) {
    useEffect(()=>{props.getAllActivities()},[props])
    // const {everyCountry}=useSelector((state)=>state.allCountries)
    const {activities}=useSelector((state)=>state.allCountries)

    function change(e){
    
    props.getActivity(e.target.value)
    }
    // console.log(everyCountry)

    // const a=[];
    

return (    
    <div className="filter">
        <div className="filteractivity">
        <span className="filterr">Filter by Activities </span>
            <select  onChange={change}>
            <option selected disabled></option>
                {/* {
                everyCountry.map(i=>{
                    if(i.activities){
                        console.log(i.activities);
                        for(const e of i.activities){
                            
                        if(!a.includes(e.name)){
                            a.push(e.name)
                            
                return <option value={e.name}>{e.name}</option>}}}
                        }
                )
                } */}
                {activities.map(i=>{
                   return <option key={i.name} value={i.name}>{i.name}</option>})}

            </select>

        
        </div>
    </div>
    
                    
)
};

function mapDispatchToProps(dispatch){

    return{getActivity:(state)=>dispatch(getActivity(state)),
            getAllActivities:()=>dispatch(getAllActivities()) 
     
    }
}

export default connect(null,mapDispatchToProps)(FilterByActivities);