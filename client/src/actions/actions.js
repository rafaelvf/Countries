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
    


export const countryName=(country)=>{
    return {
        type:ActionTypes.COUNTRY_DETAILS,
        payload:country,
    }
}


//     return {

//         type:ActionTypes.ALL_COUNTRIES,
//         payload:countries,
//     }