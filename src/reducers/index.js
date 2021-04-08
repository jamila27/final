import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';
import challengeReducer from './challenge.reducer';
import errorReducer from './error.reducer';
import allChallengesReducer from './allChallenges.reducer';
import evenementReducer from './evenement.reducer';
import allEvenementsReducer from './allEvenements.reducer'; 
import amiReducer from './reducer_amis.reducer';
import invitationReducer from './reducer_invitations.reducer';
import joueursReducer from './reducer_joueurs.reducer';
import joueurReducer from './reducer_joueur.reducer';
import eventsReducer from './reducer_events.reducer';

export default combineReducers({
  userReducer,
  usersReducer,
  challengeReducer,
  errorReducer,
  allChallengesReducer,
  evenementReducer,
  allEvenementsReducer,
  ListAmis:amiReducer,
  ListInvitations:invitationReducer,
  ListJoueurs:joueursReducer,
  joueur:joueurReducer,
  events:eventsReducer

});