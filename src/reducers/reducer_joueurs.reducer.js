
export default   function (state=[],action){
    let amis=[];
    console.log("jjjjj")
console.log("aapppppp",action)
switch(action.type){
 case "tout":
     console.log(action.payload.joueurs)
     return action.payload.joueurs   
     break;
case "refuser":
case "supprimer" : 
    return [...state,action.payload];
    break;
 case "inviter":
     return state.filter(joueur=>joueur._id!=action.payload._id)
     break;   

default:
  
     return state;
     break;

}   
}