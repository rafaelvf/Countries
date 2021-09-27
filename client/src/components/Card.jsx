import React from "react";
import "../css/Card.css";



export default function Card(props){
    const {country,continent,flag}=props;
    
    return(
        <div className="Card">
            
            <img src={flag} alt={`Flag of ${country}`} className="Cardimage" />
            <br/>
            <h2>{country}</h2>
            <h4>{continent}</h4>
            
        </div>
    )
}


