import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import FilActualite from '../pages/FilActualite';
import Accueil from '../Accueil/Accueil';
import AjouterForm from '../evenement/AjouterForm';
import {  Switch, Route } from 'react-router-dom';
import './App.css';
import SignUpSyncro from '../Log/SignUpSyncro';
import SignUp from '../Log/SignUp';
import Login from '../Log/Login';
import Profile from '../Accueil/Profile';
import liste from '../../components/evenement/listeEvenements';
import joueurs from '../../components/contact/joueurs';
import amis from '../../components/contact/amis';
import calendrier from '../../components/calendrier/calendar';  
import PrivateRoute from '../../components/Routes/PrivateRoute';
import PublicRoute from '../../components/Routes/PublicRoute';

const index = () => {
  return (
    <Router> 
      <Switch>
      <PublicRoute   restricted={false} path='/' exact component={Accueil} />
      <PrivateRoute  path="/home" component={FilActualite} /> 
      <PrivateRoute  path="/ajouterEvenement"  component={AjouterForm} />
      <PublicRoute   restricted={false}  path='/registersync' component={SignUpSyncro} />
      <PublicRoute   restricted={false}  path='/register' component={SignUp} />
      <PublicRoute   restricted={true} path='/login' component={Login} />
      <PrivateRoute  path='/profile' component={Profile} />
      <PrivateRoute  path='/ListeEvenements' component={liste} />
      <PrivateRoute  path='/joueurs' component={joueurs} />
      <PrivateRoute  path='/amis' component={amis} />
      <PrivateRoute  path='/calendrier' component={calendrier} />
    
      </Switch>
    </Router>
  );
};

export default index;