import { GET_ALL_EVENEMENTS} from "../actions/evenement.actions";

const initialState = {};
export default function allEvenementsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENEMENTS:
      return action.payload;
    default: 
      return state;
  }
}