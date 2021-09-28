import React,{useEffect} from 'react';

import { connect, useSelector } from 'react-redux';
import { getCountryDetail } from '../actions/actions';
import { useParams } from 'react-router';

export function CountryDetail(props) {
  const {countryDetail}=useSelector((state)=>state.allCountries)
  const {ID}=useParams();
  useEffect(()=>{props.getCountryDetail(ID)},[])
  return (
    <div>
            <img src={countryDetail.flag} alt={`Flag of ${countryDetail.country}`} className="Cardimage" />
            <br/>
            <h2>{countryDetail.name}</h2>
            <h4>{countryDetail.continent}</h4>
            
            <p>ID: {countryDetail.ID}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Subregion: {countryDetail.subregion}</p>
            <p>Area: {countryDetail.area} km2</p>
            <p>Population: {countryDetail.population}</p>
            <p>Tourist activity: {countryDetail.activities.map(i=>i.name+" ")}</p>
    </div>
  )
};


function mapDispatchToProps(dispatch){

  return{getCountryDetail:(ID)=>dispatch(getCountryDetail(ID))}
}

export default connect(null,mapDispatchToProps)(CountryDetail);