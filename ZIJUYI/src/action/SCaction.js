export function addshoucang (cityname){
    return {
        type:"ADD",
        data:cityname
    }
}
export function delshoucang (cityname){
    return {
        type:"DEL",
        data:cityname
    }
}