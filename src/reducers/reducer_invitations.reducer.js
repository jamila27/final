import axios from "axios";

export default   function (state=[] ,action){

    switch(action.type){
    

 case "tout":
     return action.payload.invite;
break;
case "refuser":
 case "accepter":   
    return state.filter((invit)=>invit._id!=action.payload._id);
    break;
    

default:
    return state;
    break;
}  
}
