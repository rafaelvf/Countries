import {combineReducers} from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
    allCountries: reducer,
})

export default reducers;