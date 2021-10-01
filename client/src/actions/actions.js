import { ActionTypes } from "../constants/action-types"
import axios from "axios";

export const getAll=()=>{//esta action me trae todos los paises.
    
    return async function (dispatch){
        const res= await axios.get("http://localhost:3001/countries");
    dispatch({
        type: ActionTypes.ALL_COUNTRIES,
        payload: res.data,
    })
    }}

export const getAllActivities=()=>{//esta action me trae todas las actividades.
    
        return async function (dispatch){
            const res= await axios.get("http://localhost:3001/activity/add");
        dispatch({
            type: ActionTypes.ALL_ACTIVITIES,
            payload: res.data,
        })
        }}    


export const getCountry=(term)=>{//en esta action me traigo por query el pais que este buscandose.

    return async function (dispatch){
        const res= await axios.get(`http://localhost:3001/countries?name=${term}`);
    dispatch({
        type:ActionTypes.COUNTRY_DETAILS,
        payload: res.data,
    })
    }
}

export const getContinent=(state)=>{//este action es para filtrar por continente

    return {
        type: ActionTypes.GET_CONTINENT,
        payload:state
    }
}

export const getActivity=(state)=>{//este action es para filtrar por actividad

    return {
        type: ActionTypes.GET_ACTIVITY,
        payload:state
    }
}

export const sortByAlphabet=(type)=>{

        return {
            type: ActionTypes.SORTBY_ALPHABET,
            payload:type
        }
    }

    export const sortByPopulation=(population)=>{

        return {
            type: ActionTypes.SORTBY_POPULATION,
            payload:population
        }
    }

    export const getCountryDetail=(id)=>{//buscando por path params un id
    
        return async function (dispatch){
            const res= await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({
            type: ActionTypes.COUNTRYBY_ID,
            payload: res.data,
        })
        }}



//     return {

//         type:ActionTypes.ALL_COUNTRIES,
//         payload:countries,
//     }