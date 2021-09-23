import React from "react";




export default function Card(props){
    const {country,continent,flag}=props;
    
    return(
        <div>
            
            <img src={flag} alt={`Flag of ${country}`} />
            <br/>
            <h2>{country}</h2>
            <h4>{continent}</h4>
            
        </div>
    )
}


