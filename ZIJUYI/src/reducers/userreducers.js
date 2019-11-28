export default function Userducers (state={user:""},action){
    switch(action.type){
        case "USE":
            state.user=action.data
            return {...state}
         default:
             return state   
    }
}