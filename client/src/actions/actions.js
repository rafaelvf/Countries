import { ActionTypes } from "../constants/action-types"
import axios from "axios";

export const getAll=()=>{
    
    return async function (dispatch){
        const res= await axios.get("http://localhost:3001/countries");
    dispatch({
        type: ActionTypes.ALL_COUNTRIES,
        payload: res.data,
    })
    }}
    


export const getCountry=(term)=>{

    return async function (dispatch){
        const res= await axios.get(`http://localhost:3001/countries?name=${term}`);
    dispatch({
        type:ActionTypes.COUNTRY_DETAILS,
        payload: res.data,
    })
    }
}

export const getContinent=(state)=>{

    return {
        type: ActionTypes.GET_CONTINENT,
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



//     return {

//         type:ActionTypes.ALL_COUNTRIES,
//         payload:countries,
//     }