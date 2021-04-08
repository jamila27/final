import axios from "axios";

// challenges
export const GET_challengeS = "GET_challengeS";
export const GET_ALL_CHALLENGES = "GET_ALL_CHALLENGES";
export const ADD_challenge = "ADD_challenge";
export const LIKE_challenge = "LIKE_challenge";
export const UNLIKE_challenge = "UNLIKE_challenge";
export const UPDATE_challenge = "UPDATE_challenge";
export const DELETE_challenge = "DELETE_challenge";

// comments
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

// errors
export const GET_challenge_ERRORS = "GET_challenge_ERRORS";

//////////// afficher les challenges 
export const getchallenges = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/challenge/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_challengeS, payload: array });
        dispatch({ type: GET_ALL_CHALLENGES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

/////////// ajouter un challenge
export const addchallenge = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/challenge/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_challenge_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_challenge_ERRORS, payload: "" });
        }
      });
  };
};

///////////////// aimer un challenge
export const likechallenge = (challengeId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/challenge/like-challenge/` + challengeId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_challenge, payload: { challengeId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

////////////
export const unlikechallenge = (challengeId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/challenge/unlike-challenge/` + challengeId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_challenge, payload: { challengeId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

///////// modifier des challenges 
export const updatechallenge = (challengeId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/challenge/${challengeId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_challenge, payload: { message, challengeId } });
      })
      .catch((err) => console.log(err));
  };
};

///////// supprimer un challenge
export const deletechallenge = (challengeId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/challenge/${challengeId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_challenge, payload: { challengeId } });
      })
      .catch((err) => console.log(err));
  };
};

////// ajouter un commentaire 
export const addComment = (challengeId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/challenge/comment-challenge/${challengeId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { challengeId } });
      })
      .catch((err) => console.log(err));
  };
};

////////// modifier un commentaire 
export const editComment = (challengeId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/challenge/edit-comment-challenge/${challengeId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, payload: { challengeId, commentId, text } });
      })
      .catch((err) => console.log(err));
  };
};

///////// supprimer un commentaire 
export const deleteComment = (challengeId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/challenge/delete-comment-challenge/${challengeId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { challengeId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};
