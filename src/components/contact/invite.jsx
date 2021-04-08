import React,{useState,UseEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Button, Image, List,Grid } from 'semantic-ui-react';
import {IoPersonAdd,IoPersonRemove} from 'react-icons/io5';

import {useDispatch} from'react-redux'
import { supprimerAmi } from '../../actions/SupprimeAmi.actions';
import {refuserInvitation} from '../../actions/RefuserInvitation.actions';
import {accepterInvitation} from '../../actions/AccepterInvitation.actions';
import RoomIcon from '@material-ui/icons/Room';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Invite=({autreJoueur})=> {
const dispatch=useDispatch()

    async  function call() {
    await  axios.put("http://localhost:5000/api/user/joueurA/"+localStorage.getItem("user"),{joueur:autreJoueur._id})
 
         
         .then((data)=>{
             console.log(data);
             dispatch(accepterInvitation(autreJoueur));
        });
          }
          
     async  function  cal(){
        await axios.put("http://localhost:5000/api/user/refuserInvitation/"+localStorage.getItem("user"),{joueur:autreJoueur._id})
 
          .then((data)=>{
            dispatch(refuserInvitation(autreJoueur));
 
       })}

  return(
   
       
    <Grid columns={3} style={{marginTop:"20px" , margin:"10px" }} stackable> 

    <Grid.Column >
               <Image avatar src={autreJoueur.img}  style={{width:"75px",height:"75px"}}/>
           </Grid.Column > 
    
    
           <Grid.Column >
           <div style={{float: "left"}}   >
           <h4>{autreJoueur.nom} </h4><br></br>
           
           <span style={{fontSize: "small"}} ><RoomIcon  style={{color: "#f97304", size:"small"}}/> {autreJoueur.ville}</span><br></br>
           <span style={{fontSize: "small"}} ><FavoriteIcon style={{color: "#f97304", size:"xx-small"}}/> {autreJoueur.sportFavoris}</span>
           </div>
           </Grid.Column >
           <Grid.Column>
<Button style={{color:"#095b7c"}} title={"refuser"} onClick={cal} style={{marginLeft:"200px", marginBottom:" 5px" }}><IoPersonRemove/></Button>
<Button style={{color:"#095b7c"}} title={"accepter"} onClick={call} style={{marginLeft:"200px"}}><IoPersonAdd/></Button>
</Grid.Column>
    </Grid>)}
      
      
 



export default Invite
