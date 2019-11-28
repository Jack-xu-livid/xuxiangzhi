export default function Shoureducre(state={SCarr:[]},action){
    switch(action.type){
        case "ADD":
            state.SCarr.push(action.data)
            return {...state}
        case "DEL":
            let index;
            for(let i=0;i<state.SCarr.length; i++){
              if(state.SCarr[i].id===action.data.id){
                   index=i
              }
            }
            state.SCarr.splice(index,1)
            return {...state}
        default:
            return state    
    }
}