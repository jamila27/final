import React,{useState,useEffect} from "react";
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import 'moment/locale/fr';
import {bindActionCreators} from 'redux';
import moment from'moment';
import {connect, useDispatch} from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import {Actionparticiper} from '../../actions/ActionEventsParticiper.actions'
import axios from "axios"
const EventDetail =({evenement})=> {
    const dispatch=useDispatch()
    
    async function participer(){
        await axios.put("http://localhost:5000/api/evenement/participerEvent/"+localStorage.getItem("user"),{id:evenement._id}).then((data)=>{console.log(data.data);
        if(data.data.error=="desoler"){alert("votre age ou votre sexe ne correspondant pas avec l'age ou le sexe de cet evenement")}else if(data.data=="oo"){alert("vous participer a d'autre evenement dans la date de ce evenement")}})
        dispatch(Actionparticiper(evenement._id));
    }
    


    return (
        

        <Grid.Column>

    <Card style={{margin:"8px"}}>
        <Image src={evenement.image} style={{height:"200px"}}  ui={false} alt="event"/>
                <Card.Content >
                    <Card.Meta>{ moment(new Date(evenement.dateDebut)).locale("fr").format("LLLL")}</Card.Meta>
                    <Card.Header>{evenement.titre}</Card.Header>
                    <Card.Description  >{evenement.lieu}</Card.Description>
                    <Card.Description  >{evenement.Description}</Card.Description>
                    <Card.Description  >{evenement.sexe}</Card.Description>
                        
                      
                </Card.Content>
                
                <Card.Content extra>
          {(!evenement.participants.includes(localStorage.getItem("user")))?
                   ( <Button onClick={participer} className='btn-card' >
                         Participer</Button>):
                         ( <Button onClick={participer} className='btn-card' >
                         deja participer</Button>)}
                </Card.Content>
        
    </Card>
    </Grid.Column>
    

 )
}


export default EventDetail;