import axios from 'axios'
export function initialiser(){

    return (dispatch)=>{
        var events
    return axios
    .get("http://localhost:5000/api/evenement/").then(data=>{   data.data.data ? events = data.data.data : events =[];
    dispatch({type:"tousEv",payload:events})})}}