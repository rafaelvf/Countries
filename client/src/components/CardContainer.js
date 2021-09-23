import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card";
import {connect} from "react-redux";
import { getAll } from '../actions/actions';


export function CardContainer(props) {//props = {country:state.country[],getcountries:function}
  useEffect(()=>{props.getcountries()},[])//con useEffect estamos cargando el estado porque set esta ejecunta elgetcountries que tiene adentro el dispatch la action getall
  

  return (
    <div className="cardcontainer">
    
  { props.country.map(i=>{
      return (
        <div key={i.ID}> {/* para que cada card tenga una id en el navegador, y no moeleste la consola del navegador */}
          <Link to={`/countries/${i.ID}`}>
          <Card country={i.name} flag={i.flag} continent={i.continent} />
          </Link>
        </div> 
      )
    })}
    
    </div>
  )
};


function mapStateToProps(state){
  return{
      country:state.allCountries.countries//country se guarda lo que necesito del state del store
  }
}
function mapDispatchToProps(dispatch){

  return{getcountries:()=>dispatch(getAll())}
}

export default connect(mapStateToProps,mapDispatchToProps)(CardContainer);