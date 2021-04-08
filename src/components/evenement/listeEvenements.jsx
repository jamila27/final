import React,{useState,useEffect,forwardRef}from "react";
import {useSelector,useDispatch} from'react-redux'
import  DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {  Dropdown,Icon, Input, Menu,Button,Checkbox } from 'semantic-ui-react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import axios from'axios';
import {connect} from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import '../../styles/Cards.css';
import EventDetail from './event-detail';
import { Card, Grid, Divider } from 'semantic-ui-react'
import Header from '../pages/Header'
import FormControl from '@material-ui/core/FormControl';
import {InputLabel} from '@material-ui/core';
import { Select } from 'semantic-ui-react';
import {initialiser} from'../../actions/InitialisationEvents.actions'




const sp = [
  { key: '', text: '', value: '' },
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
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '+100',
    },
  ];







  const ListeEvenements=()=>{
    const [nom,setNom]=useState("");
      const [sport,setSport]=useState("");
      const [loadPage,setLoadPage]=useState(true);
      const [recherche,setRecherche]=useState(false);
      const [distance,setDistance]=useState(100);
      const [dati,setDati]=useState(null);
      const [dates,setDates]=useState([]);
      const [lieu,setLieu]=useState("votre Adresse");
      const [eventR,setEventR]=useState(null);
      
      const dispatch=useDispatch();
      const events=useSelector((state)=>{return state.events})
     
      let positions=null;
      console.log(eventR);
         
     useEffect(async ()=>{if(loadPage){
      await navigator.geolocation.getCurrentPosition((pos)=>{positions= pos.coords;}, (error)=>{console.log(error.message)});
      await dispatch(initialiser())
      setLoadPage(false)
      
     }})
    
   
    

      


      const ExampleCustomInput = forwardRef(
        ({ value, onClick }, ref) => (
          <Button className="example-custom-input" placeholder={"ooo"} style={{width:"150px",textAlign:"left"}} onClick={onClick} ref={ref}>
           {(value)?value:"Choisir une date"}
          </Button>
        ),
      );



     
        
   
        
         function datesChecked(){let tabCke=document.querySelectorAll('input[type="checkbox"]');
        let dats=[]
         for(let i in tabCke){
           if(tabCke[i].checked){
    dats.push(parseInt(i));
           }}
           setDates(dats)
          }
      async function  envoyer(e){ 
        
        await datesChecked();
       // console.log(dates);
        axios.post("http://localhost:5000/api/evenement/rechecheEvet/"+localStorage.getItem("user"),{nom:nom,sport:sport,distance:distance,lieu:lieu,dates:dates,dati:dati,posit:positions.latitude+","+positions.longitude}).then((data)=>{setEventR( data.data.events)});
       // navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos.coords);}, (error)=>{console.log(error.message)})
          }
   
          
          
      
      return (<div>

        <Header/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
       
        <Grid columns={6} style={{marginTop:"20px", marginLeft:"80px", textAlign:"center" }} stackable> 

        <Grid.Row>
        <Grid.Column style={{width:"20%" , marginRight:"-20px"}}>

        <Input
        style={{width:"200px"}}
          icon='search'
          iconPosition='left'
          placeholder='Recherche par titre..'
          onChange={(e)=>{setNom(e.target.value)}}
         />

        </Grid.Column>

        <Grid.Column style={{width:"20%" , marginRight:"-45px"}}>

        <Select  
          onChange={(e)=>{setSport(e.target.value)}} 
          style={{width:"150px"}} name="sport"
          options={sp}
          placeholder='Sport'></Select>

        </Grid.Column>

        <Grid.Column style={{width:"20%" , marginRight:"-70px"}}>
                  
        <Dropdown text="Date">
        <Dropdown.Menu   >
     <Dropdown.Item  ><Checkbox id="0"   label="Aujourd hui"/></Dropdown.Item>   
     <Dropdown.Item  ><Checkbox id="1"   label="Demain"/></Dropdown.Item>  
     <Dropdown.Item><Checkbox id="2"   label="Cette semaine"/></Dropdown.Item> 
     <Dropdown.Item><Checkbox id="3"  label="Ce week-end"/></Dropdown.Item> 
     <Dropdown.Item><Checkbox label="La semaine prochaine"/></Dropdown.Item> 
     <Dropdown.Item><Checkbox  label="Le mois prochain"/></Dropdown.Item> 
     <Dropdown.Item><DatePicker
        selected={dati}
        onChange={date => {setDati(date);console.log(date)}}
        isClearable
        customInput={<ExampleCustomInput />} /></Dropdown.Item> 
      </Dropdown.Menu>
       </Dropdown>
        
        </Grid.Column>

        <Grid.Column style={{width:"20%" , marginRight:"-10px"}}> 


        <Slider 
         
         defaultValue={distance}
         onChange={(e,v)=>{setDistance(v)}}
         aria-labelledby="discrete-slider-always"
         step={1}
         marks={marks}
         valueLabelDisplay="on"/>
        

        </Grid.Column>

        <Grid.Column style={{width:"20%" , marginRight:"20px"}} >

        <Dropdown text={<Input style={{width:"150px", marginRight:"-50px"}} type="text" value={lieu} onChange={(e)=>{setLieu(e.target.value); }} />}>
              <Dropdown.Menu>
                <Dropdown.Item text="Votre adresse" onClick={()=>{setLieu("Votre adresse"); }}/>
                <Dropdown.Item text="Votre localisation" onClick={()=>{setLieu("Votre localisation")}}/>
              </Dropdown.Menu>
        </Dropdown>

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



<div>
<div className='cards'>
<div className='cards__container'>
{!loadPage && <Card.Group itemsPerRow={3}>
   { events.map((event)=>
      
      
      <EventDetail  key={event._id} evenement={event}/>
      
      )}
</Card.Group >}
</div>
</div>
</div></div>)
     
     

      }
     
     export default ListeEvenements