import { GET_EVENEMENT } from "../actions/evenement.actions";


  const initialState = {};
  
  export default function evenementReducer(state = initialState, action) {
    switch (action.type)
      {
      case GET_EVENEMENT :
        return action.payload;
       default:
        return state;
    } 
    
  }
  