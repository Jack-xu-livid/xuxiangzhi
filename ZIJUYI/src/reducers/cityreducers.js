 export default function cityreducers (state={city:"北京"},action){
      switch(action.type){
          case "GAIB":
              state.city=action.data
              return {...state}
           default:
               return state   
      }
}