import { ActionTypes } from "../constants/action-types"

const initialState ={
    countries:[],
    everyCountry:[],
    countryDetail:{},
    activities:[]
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ALL_COUNTRIES:
            return{...state,
                countries:action.payload,//eesta la que va cambiando
                everyCountry:action.payload//esta es la que no tengo que modificar
            } 
        case ActionTypes.ALL_ACTIVITIES:
            return{...state,
                    activities:action.payload
            }
            
        case ActionTypes.COUNTRY_DETAILS:
            return{...state,
                    countries:action.payload
            }    
        case ActionTypes.GET_CONTINENT:
            const continentFilter = state.everyCountry.filter(i=>i.continent===action.payload)
            return{...state,
                countries:continentFilter
            }
        case ActionTypes.SORTBY_ALPHABET:
            if(action.payload==="A-Z"){
                return{...state,
                    countries:state.countries.sort((a,b)=>a.name.localeCompare(b.name))
                }
            }else{
                return{...state,
                    countries:state.countries.sort((a,b)=>b.name.localeCompare(a.name))
                }
            }
            case ActionTypes.SORTBY_POPULATION:
                if(action.payload==="ASC"){
                    return{...state,
                        countries:state.countries.sort((a,b)=>a.population -b.population)
                    }
                }else{
                    return{...state,
                        countries:state.countries.sort((a,b)=>b.population - a.population)
                    }
                }  
                case ActionTypes.COUNTRYBY_ID:
                    return{...state,
                        countryDetail:action.payload
                    } 
        case ActionTypes.GET_ACTIVITY:
            // const activityFilter = [];
            // state.everyCountry.map(i=>{
            //     if(i.activities){
            //         for(const e of i.activities){
            //             if(e.name===action.payload){
            //                 activityFilter.push(i)
                            
            //             }
            //         }
            //     }}
            //     )

            return{
                ...state,
                countries:state.everyCountry.filter((c) => { return c.activities.some((a) => a.name === action.payload) })
            }
                    
        default:
            return state;
    }

}