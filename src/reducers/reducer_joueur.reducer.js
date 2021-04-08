import axios from "axios";

export default async  function (state,action){
    let joueur={};
    switch(action.type){
    case "inviterJoueur": await axios.get("http://localhost:5000/api/user/tous/"+localStorage.getItem("user")).then((data)=>{joueur=data.data.joueurs});
    return joueur;
break;
case "log":

 
     await axios.get("http://localhost:5000/api/user/tous/"+localStorage.getItem("user")).then((data)=>{joueur=data.data.joueurs});
    return joueur;
break;
default:
    return [];
    break
}
    
}