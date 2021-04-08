import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { supprimerAmi } from "../../actions/SupprimeAmi.actions"
import { Button, Image, List ,Grid} from 'semantic-ui-react';
import {IoPersonRemove} from 'react-icons/io5';

import {useSelector,useDispatch} from 'react-redux'  
import RoomIcon from '@material-ui/icons/Room';
import FavoriteIcon from '@material-ui/icons/Favorite';    
const Ami= ({autreJoueur}) =>{
    

   const dispatch=useDispatch();
     
   

    
         async function  call() {
           await axios.put("http://localhost:5000/api/user/supprimerAmi/"+localStorage.getItem("user"),{joueur:autreJoueur._id})
            .then((data)=>{
            dispatch(supprimerAmi(autreJoueur))
            });
            
          }
    return(
      <Grid columns={3} style={{marginTop:"20px",  margin:"10px" }} stackable> 

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


<Grid.Column >
<Button title={"supprimer"} onClick={call} style={{marginLeft:"200px"}}><IoPersonRemove/></Button>
</Grid.Column >

</Grid>
   
  
)
}
   


export default Ami;
