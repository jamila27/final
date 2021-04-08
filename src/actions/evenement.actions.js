import axios from "axios";
export const GET_EVENEMENT ="GET_EVENEMENT";
export const ADD_EVENEMENT ="ADD_EVENEMENT";
export const GET_ALL_EVENEMENTS = "GET_ALL_EVENEMENTS";
export const GET_EVENEMENT_ERRORS = "GET_EVENEMENT_ERRORS";


/////////// ajouter un evenement
export const addEvenement = (data) => {
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_API_URL}api/evenement/`, data)
        .then();
    };
  };

  
  /////////// afficher un evenement
export const getEvenement = (uid) =>{
    return(dispatch) =>{
       return axios
        .get(`${process.env.REACT_APP_API_URL}api/evenement/`)
        .then((res)=>{
            dispatch ({type: GET_EVENEMENT, payload: res.data})
        })
        .catch((err) => console.log(err)); 
    }
}

/////////// afficher des evenements
export const getEvenements = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/evenement/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_EVENEMENT, payload: array });
        dispatch({ type: GET_ALL_EVENEMENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};