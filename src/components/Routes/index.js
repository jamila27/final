import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import FilActualite from '../pages/FilActualite';
import Accueil from '../Accueil/Accueil';
import AjouterForm from '../evenement/AjouterForm';
import {  Switch, Route } from 'react-router-dom';
import './App.css';
import SignUpSyncro from '../../components/pages/SignUpSyncro';
import SignUp from '../../components/pages/SignUp';
import Login from '../../components/pages/Login';
import Profile from '../Accueil/Profile';
import liste from '../../components/evenement/listeEvenements';
import joueurs from '../../components/contact/joueurs';
import amis from '../../components/contact/amis';
import calendrier from '../../components/calendrier/calendar'; 

const index = () => {
  return (
    <Router> 
      <Switch>
      <Route  path='/' exact component={Accueil} />
      <Route path="/home" component={FilActualite} /> 
      <Route path="/ajouterEvenement"  component={AjouterForm} />
    
      <Route  path='/registersync' component={SignUpSyncro} />
      <Route  path='/register' component={SignUp} />
      <Route  path='/login' component={Login} />
      <Route  path='/profile' component={Profile} />
      <Route  path='/ListeEvenements' component={liste} />
      <Route  path='/joueurs' component={joueurs} />
      <Route  path='/amis' component={amis} />
      <Route  path='/calendrier' component={calendrier} />
      </Switch>
    </Router>
  );
};

export default index;