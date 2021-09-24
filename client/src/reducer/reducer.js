import { ActionTypes } from "../constants/action-types"

const initialState ={
    countries:[],
    countriesLoaded:[]
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ALL_COUNTRIES:
            return{...state,
                countries:action.payload
            } 
        case ActionTypes.COUNTRY_DETAILS:
            return{...state,
                    countries:action.payload
            }    
        default:
            return state;
    }

}