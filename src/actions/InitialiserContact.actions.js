import axios from 'axios'
export function initialiser(){return (dispatch)=>{
    let invit=[]
    let joueurs=[]
    return  axios
    .get("http://localhost:5000/api/user/amis/"+localStorage.getItem("user")).then(async(data)=>{
      await axios.get("http://localhost:5000/api/user/invitations/"+localStorage.getItem("user")).then((res)=>{console.log(res.data);invit=res.data.joueurs});
      await axios.get("http://localhost:5000/api/user/tous/"+localStorage.getItem("user")).then((res)=>{console.log("rr",res.data);joueurs=res.data.joueurs});
      const amis= data.data.joueurs;dispatch({type:"tout",payload:{amis:amis,invite:invit,joueurs:joueurs}})})}
    }