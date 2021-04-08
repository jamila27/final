import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import '../styles/GoogleLog.css';

import google from '../assets/images/google.png'

const clientId =
  '729697396176-tu03ksd9m28cf2js7ejh62oifkoaa5oa.apps.googleusercontent.com';
 

function GoogleLogout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Vous avez réussi à vous déconnecter. ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src={google} alt="google login" className="icon"></img>

      <span className="buttonText">Se déconnecter</span>
    </button>
  );
}

export default GoogleLogout;