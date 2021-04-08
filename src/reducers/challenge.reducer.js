import {
  DELETE_COMMENT,
  DELETE_challenge,
  EDIT_COMMENT,
  GET_challengeS,
  LIKE_challenge,
  UNLIKE_challenge,
  UPDATE_challenge,
} from "../actions/challenge.actions";

const initialState = {};

export default function challengeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_challengeS:
      return action.payload;
    case LIKE_challenge:
      return state.map((challenge) => {
        if (challenge._id === action.payload.challengeId) {
          return {
            ...challenge,
            likers: [action.payload.userId, ...challenge.likers],
          };
        }
        return challenge;
      });
    case UNLIKE_challenge:
      return state.map((challenge) => {
        if (challenge._id === action.payload.challengeId) {
          return {
            ...challenge,
            likers: challenge.likers.filter((id) => id !== action.payload.userId),
          };
        }
        return challenge;
      });
    case UPDATE_challenge:
      return state.map((challenge) => {
        if (challenge._id === action.payload.challengeId) {
          return {
            ...challenge,
            message: action.payload.message,
          };
        } else return challenge;
      });
    case DELETE_challenge:
      return state.filter((challenge) => challenge._id !== action.payload.challengeId);
    case EDIT_COMMENT:
      return state.map((challenge) => {
        if (challenge._id === action.payload.challengeId) {
          return {
            ...challenge,
            comments: challenge.comments.map((comment) => {
              if (comment._id === action.payload.commentId) {
                return {
                  ...comment,
                  text: action.payload.text,
                };
              } else {
                return comment;
              }
            }),
          };
        } else return challenge;
      });
    case DELETE_COMMENT:
      return state.map((challenge) => {
        if (challenge._id === action.payload.challengeId) {
          return {
            ...challenge,
            comments: challenge.comments.filter(
              (comment) => comment._id !== action.payload.commentId
            ),
          };
        } else return challenge;
      });
    default:
      return state;
  }
}
