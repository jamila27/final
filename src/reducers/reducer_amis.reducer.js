import axios from "axios";
const initialState = {};
export default   function (state=[],action){
    let amis=[];
    console.log("jjjjj")
console.log("aapppppp",action)
switch(action.type){
 case "tout":
     return action.payload.amis   
     break;
case "supprimer":
    return state.filter((ami)=>ami._id!=action.payload._id);;
    break;
    case "accepter":
        return [...state,action.payload]
default:
  
     return state;
     break;
    /* default:
     return state
break;*/
}   
}