import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

const Logout = () => {

const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, { expires: 1 });
  }
};

const logout = async () => {
  localStorage.removeItem('user');
  await axios({
    method: "get",
    url: `${process.env.REACT_APP_API_URL}api/user/logout`,
    withCredentials: true,
  })
    .then(() => removeCookie("jwt"))
    .catch((err) => console.log(err));
  
  window.location = "/";
};

return (
        <IconButton
             onClick={logout}
             color="inherit" >

              <ExitToAppIcon fontSize="large" />

          </IconButton>

  );
};

export default Logout;
