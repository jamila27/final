import axios from 'axios'
export function initialiser(){return (dispatch)=>{

    return axios.
    get("http://localhost:5000/api/evenement/").then(data=>{const events=data.data.data;dispatch({type:"tousEv",payload:events})})}}