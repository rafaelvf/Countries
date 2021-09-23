import { ActionTypes } from "../constants/action-types"

const initialState ={
    countries:[],
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ALL_COUNTRIES:
            return{...state,
                countries:state.countries.concat(action.payload)
            } 
        default:
            return state;
    }

}