import { GET_challenge_ERRORS } from "../actions/challenge.actions";
import { GET_USER_ERRORS } from "../actions/user.actions";

const initialState = { userError: [], challengeError: []};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_challenge_ERRORS:
      return {
        challengeError: action.payload,
        userError: []
      }
    case GET_USER_ERRORS:
      return {
        userError: action.payload,
        challengeError: []
      }
    default: 
      return state;
  }
}