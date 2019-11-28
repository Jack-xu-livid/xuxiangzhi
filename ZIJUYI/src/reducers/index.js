import {combineReducers} from "redux";
import cityreducers from "./cityreducers";
import Searchreducer from "./searchreducers";
import Userducers from "./userreducers";
import Shouredecers from "./shouredecers";
let allReducers=combineReducers({
    cityreducers,
    Searchreducer,
    Userducers,
    Shouredecers
})
export default allReducers;