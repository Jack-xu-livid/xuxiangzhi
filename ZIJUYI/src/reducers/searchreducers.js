export default function Searchreducre(state={kw:""},action){
     switch(action.type){
         case "SEARCH":
             state.kw=action.data
             return {...state}
         default:
             return state    
     }
}