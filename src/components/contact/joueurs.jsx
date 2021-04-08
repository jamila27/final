import React, { useState,useEffect } from 'react';

import Ami from './ami';
import axios from"axios";
import { connect } from "react-redux";
import { Button, Image, List } from 'semantic-ui-react';
import {  Grid, Divider, Input, Select } from 'semantic-ui-react'
import Slider from '@material-ui/core/Slider';
import Header from '../pages/Header'
import {useSelector,useDispatch} from 'react-redux'
import { supprimerAmi } from "../../actions/SupprimeAmi.actions"
import { initialiser } from "../../actions/InitialiserContact.actions"
import Invite from "./invite";
import Joueur from "./joueur";
import Paper from '@material-ui/core/Paper';
const Joueurs=  (props) =>{
  const sp = [
    { key: "", text: '', value: "" },
    { key: 'Football', text: 'Football', value: 'Football' },
    { key: 'Tennis', text: 'Tennis', value: 'Tennis' },
    { key: 'Basketball', text: 'Basketball', value: 'Basketball' },
    { key: 'Course', text: 'Course', value: 'Course' },
    { key: 'Ski', text: 'Ski', value: 'Ski' },
    { key: 'Yoga', text: 'Yoga', value: 'Yoga' },
    { key: 'Equitation', text: 'Equitation', value: 'Equitation' },
    { key: 'Fitness', text: 'Fitness', value: 'Fitness' },
    { key: 'Dance', text: 'Dance', value: 'Dance' },
    { key: 'Escalade', text: 'Escalade', value: 'Escalade' },
    { key: 'Gymnastique', text: 'Gymnastique', value: 'Gymnastique' },
    { key: 'Golf', text: 'Golf', value: 'Golf' },
    { key: 'Musculation', text: 'Musculation', value: 'Musculation' },
    { key: 'Volleyball', text: 'Volleyball', value: 'Volleyball' },
    { key: 'Handball', text: 'Handball', value: 'Handball' },
    { key: 'Vélo', text: 'Vélo', value: 'Vélo' },
    { key: 'Planche à voile', text: 'Planche à voile', value: 'Planche à voile' },
    { key: 'Plongée', text: 'Plongée', value: 'Plongée' },
    { key: 'Karaté', text: 'Karaté', value: 'Karaté' },
    { key: 'Marche', text: 'Marche', value: 'Marche' },
    { key: 'Natation', text: 'Natation', value: 'Natation' },
    { key: 'Boxe', text: 'Boxe', value: 'Boxe' },]

    const marks = [
      {
        value: 0,
        label: '0',
      }, {
        value: 10,
        label: '10km',
      },
      {
        value: 25,
        label: '25km',
      },
      {
        value: 50,
        label: '50km',
      },{value:75,label:"75km"},
      {
        value: 100,
        label: '+100km',
      },
    ];

const dispatch=useDispatch();
 
      const [nom,setNom]=useState("");
      const [sport,setSport]=useState("");
      const [recherche,setRecherche]=useState(false);
      const [distance,setDistance]=useState(100);
       const amiss= useSelector((state)=> state.ListAmis) 
       const invites=useSelector((state)=>{return state.ListInvitations})
       const [amisR,setamisR]=useState(null);
      const [invitesR,setinvitesR]=useState(null);
      
      const [joueursR,setjoueursR]=useState(null);
      
       const joueurs=useSelector((state)=>{return state.ListJoueurs})
       console.log(joueurs)
      //amiss.then(res=>{setAmis(res)})})
  const [loadPage,setLoadPage]=useState(true)
      useEffect(async() => {
        if (loadPage) {
          await  dispatch(initialiser());
          
          setLoadPage(false);
        
        }},[])
        
      
        async function envoyer(e){ 
          await axios.post("http://localhost:5000/api/user/rechercheJoueurs/"+localStorage.getItem("user"),{nom:nom,sport:sport,distance:distance}).then((data)=>{setjoueursR(data.data.joueurs)} );
          await axios.put("http://localhost:5000/api/user/rechercheAmis",{nom:nom,sport:sport,Id:localStorage.getItem("user"),distance:distance}).then((data)=>{setamisR(data.data.amis);})
          await axios.put("http://localhost:5000/api/user/rechercheInvitations",{nom:nom,sport:sport,Id:localStorage.getItem("user"),distance:distance}).then((data)=>{setinvitesR(data.data.invitations); })
          setRecherche(true) 
        }




    return  ( <>
      <Header/>
    <div className="search" > 

    <Grid columns={4} style={{marginTop:"100px", marginLeft:"80px", textAlign:"center" }} stackable> 

    <Grid.Row>
    <Grid.Column >

    <Input
    style={{width:"200px"}}
      icon='search'
      iconPosition='left'
      placeholder='Recherche par nom..'
      onChange={(e)=>{setNom(e.target.value);console.log(e.target.value)}}
     />

    </Grid.Column>

    <Grid.Column >

    <Select  
      onChange={(e,v)=>{setSport(v.value);console.log(v.value)}}
      style={{width:"200px"}} name="sport"
      options={sp}
      placeholder='Rechercher par sport'></Select>

    </Grid.Column>

    <Grid.Column > 


    <Slider 
     
     defaultValue={distance}
     onChange={(e,v)=>{setDistance(v)}}
     aria-labelledby="discrete-slider-always"
     step={1}
     marks={marks}
     valueLabelDisplay="on"/>
    

    </Grid.Column>

    <Grid.Column >

    <button className='btn--send' onClick={envoyer}>Rechercher</button>

    </Grid.Column> 

    </Grid.Row>
    </Grid>
          
     
  <Divider />
<style type="text/css">
    {`

.btn--send {
background-color: #f97304;
border-radius: 5px;
color: white;

}

.btn--send:hover {

background-color: #f97304;

border-radius: 5px;
color: white;
font-weight: bold;
}

`}

  </style>
    
    <div>{!recherche?(<div>{!loadPage && 
    
    <div style={{marginLeft:"220px", marginRight:"30px",marginTop:"50px"}}>
   {(amiss.length!=0)?(<div><h3>Amis</h3>
  <Paper style={{ width:"80%"}} >
 
  <List > {amiss.map((ami)=> <Ami autreJoueur={ami} key={ami._id} />)}</List></Paper></div>):""}
  {(invites.length!=0)?(
    <div style={{ marginTop:"30px"}}>
    <h3>Invitations</h3>
  <Paper style={{ width:"80%"}}>
    <List >
  {invites.map((invite)=><Invite  autreJoueur={invite} key={invite._id}/>)}</List></Paper></div>):""}
   
  {(joueurs.length!=0)?(<div style={{marginTop:"30px"}}><h3>Connaissances</h3>
   <Paper style={{ width:"80%"}}><List divided  >{joueurs.map((jou)=><Joueur  autreJoueur={jou} key={jou._id}/>)}</List></Paper>
    </div>):""} </div>}</div>):
    
    
    
    <div style={{marginLeft:"200px",marginTop:"50px"}}>
   {(amisR.length!=0)?(<div><h3>Amis</h3>
  <Paper  style={{ width:"80%"}}>
 
  <List > {amisR.map((ami)=> <Ami autreJoueur={ami} key={ami._id} />)}</List></Paper></div>):""}
  {(invitesR.length!=0)?(
    <div style={{ marginTop:"30px"}}>
    <h3>Invitations</h3>
  <Paper style={{ width:"80%"}}>
    <List >
  {invitesR.map((invite)=><Invite  autreJoueur={invite} key={"1"}/>)}</List></Paper></div>):""}
   
  {(joueursR.length!=0)?(<div style={{marginTop:"30px"}}><h3>Connaissances</h3>
   <Paper style={{ width:"80%"}}><List >{joueursR.map((jou)=><Joueur  autreJoueur={jou} key={jou._id}/>)}</List></Paper>
    </div>):""} </div>}</div>)
    
    </div></>
    
    
     )


       

                   


  }












export default Joueurs;


