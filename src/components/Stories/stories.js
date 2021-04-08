import "../../styles/components/_stories.scss";
import Story from "./Story";
import StoryAjout from "./StoryAjout"; 
import { useDispatch, useSelector} from"react-redux";
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from "react-elastic-carousel";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import {initialiser}from"../../actions/InitialisationEvents.actions"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 5,  itemsToShow: 1 },
  { width: 50,  itemsToShow: 1 },
  { width: 70, itemsToShow: 2 },
  { width: 75, itemsToShow: 2 },
  { width: 80, itemsToShow: 2 },
  { width: 85, itemsToShow: 2 },
  { width: 90, itemsToShow: 2 },
  { width: 100, itemsToShow: 2 },
  { width: 110, itemsToShow: 2},
  { width: 120, itemsToShow: 3},
  { width: 130, itemsToShow: 3},
  { width: 140, itemsToShow: 3},
  { width: 150, itemsToShow: 3},
  { width: 160, itemsToShow: 3},
  { width: 170, itemsToShow: 3},
  { width: 180, itemsToShow: 3},
  { width: 190, itemsToShow: 3},
  { width: 200, itemsToShow: 3},
  { width: 210, itemsToShow: 3},
  { width: 220, itemsToShow: 3},
  { width: 230, itemsToShow: 3},
  { width: 240, itemsToShow: 3},
  { width: 250, itemsToShow: 3},
  { width: 260, itemsToShow: 3},
  { width: 300, itemsToShow: 3},
  { width: 320, itemsToShow: 3},
  { width: 350, itemsToShow: 4},
  { width: 400, itemsToShow: 4},
  { width: 450, itemsToShow: 4},
  { width: 500, itemsToShow: 4},
  { width: 550, itemsToShow: 4},
  { width: 600, itemsToShow: 4},
  { width: 650, itemsToShow: 4},
  { width: 700, itemsToShow: 6},
  { width: 768, itemsToShow: 6},
  { width: 1000, itemsToShow: 6},
  { width: 1100, itemsToShow: 6 },
  { width: 1150, itemsToShow: 9 },
  { width: 1200, itemsToShow: 10},
  { width: 1250, itemsToShow: 10 },
];

function Stories(props) {

const events = useSelector((state)=>{
  return state.events});

const [loadPage,setLoadPage]=useState(true);
const dispatch=useDispatch()

useEffect(async()=>{if(loadPage){
  await dispatch(initialiser())
  setLoadPage(false)}})

  return (<div>{(!loadPage)?(
    <div className="stories">
    
      { (events.length!=0)?

        
    <Carousel  breakPoints={breakPoints}>
    <StoryAjout />
          { events.map((e)=>{return <Item><Story event={e} /></Item>})}
         
    </Carousel> :
    <Carousel >
      
    <StoryAjout /> 
    </Carousel>}


    </div>
  ):""}</div>);

}

export default Stories;


