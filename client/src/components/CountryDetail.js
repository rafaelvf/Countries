import React,{useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { getCountryDetail } from '../actions/actions';
import { useParams } from 'react-router';
import "../css/CountryDetail.css";

export function CountryDetail(props) {
  const {countryDetail}=useSelector((state)=>state.allCountries)
  const {ID}=useParams();
  useEffect(()=>{props.getCountryDetail(ID)},[])
  
  
  return countryDetail && countryDetail.length? (
    <div className="carddetail">
            <img src={countryDetail.flag} alt={`Flag of ${countryDetail.country}`} className="Cardimage" />
            <br/>
            <h2>{countryDetail.name}</h2>
            <h4>{countryDetail.continent}</h4>
            
            <p>ID: {countryDetail.ID}</p>
            <p>Capital: {countryDetail.capital}</p>
            <p>Subregion: {countryDetail.subregion}</p>
            <p>Area: {countryDetail.area} km2</p>
            <p>Population: {countryDetail.population}</p>
            
            {countryDetail.activities?<p>Tourist activity: {countryDetail.activities.map(i=>i.name+" ")}</p>:null}
    </div>
  ):<p>The country does not exist</p>
  
};


function mapDispatchToProps(dispatch){

  return{getCountryDetail:(ID)=>dispatch(getCountryDetail(ID))}
}

export default connect(null,mapDispatchToProps)(CountryDetail);