import { GET_ALL_CHALLENGES } from "../actions/challenge.actions";

const initialState = {};

export default function allChallengesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHALLENGES:
      return action.payload;
    default: 
      return state;
  }
}