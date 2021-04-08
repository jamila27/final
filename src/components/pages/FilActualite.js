import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import NewChallengeForm from "../challenge/NewChallengeForm";
import Thread from "../Thread";
import Stories from "../Stories/stories.js";

import {Link} from 'react-router';
import Header from './Header'
//import StoryAjout from "../Stories/StoryAjout";
import AjouterEvt from "../evenement/AjouterEvt";

const FilActualite = () => {
  const uid = useContext(UidContext);

  return (
    <>
    <Header/>
    
    <div className="home">   
      <div/>
  
      <div className="main"> 
      <br></br><br></br>
        <Stories/> 
        
        
        <div className="home-header" >
         <NewChallengeForm />
        </div>
        <Thread />
      </div>
      <div className="right-side">
          <h3>Publicités </h3>
      </div>
    </div>

  </>
  );
};

export default FilActualite;
