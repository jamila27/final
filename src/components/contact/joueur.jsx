import React from 'react';
import axios from 'axios';
import {IoPersonAdd} from 'react-icons/io5';

import { Button, Image, List,Grid,Divider } from 'semantic-ui-react';
import {useDispatch} from'react-redux';
import {inviterJoueur} from'../../actions/InviterJoueur.actions'
import RoomIcon from '@material-ui/icons/Room';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Joueur = ({autreJoueur})=>{
  const dispatch=useDispatch();
  async function call() {
    axios.put("http://localhost:5000/api/user/joueur/"+localStorage.getItem("user"),{joueur:autreJoueur._id})
    .then((data)=>{
    dispatch(inviterJoueur(autreJoueur))
    });}
    console.log({autreJoueur})
    
       return (<Grid columns={3} style={{marginTop:"20px", margin:"10px" }} stackable> 

       <Grid.Column >
                  <Image avatar src={autreJoueur.img} style={{width:"75px",height:"75px"}}/>
              </Grid.Column > 
       
       
              <Grid.Column >
              <div   >
              <h4>{autreJoueur.nom} </h4><br></br>
              <div >
              <span style={{fontSize: "small"}} ><RoomIcon  style={{color: "#f97304", size:"small"}}/> {autreJoueur.ville}</span>
              <span style={{fontSize: "small"}} ><FavoriteIcon style={{color: "#f97304", size:"xx-small"}}/> {autreJoueur.sportFavoris.length==1 ? autreJoueur.sportFavoris : autreJoueur.sportFavoris.map(item => {return item + ' , '})}</span>
              </div>
              </div>
              </Grid.Column >
       
              
              <Grid.Column >
              <Button title={"inviter"} onClick={call} style={{marginLeft:"200px"}} ><IoPersonAdd /></Button>
              </Grid.Column >
              <Divider style={{width: "100%"}} />
                  </Grid>
                 )}
       
      
           
          
          
   

    
    
        
 


  
export default Joueur;
