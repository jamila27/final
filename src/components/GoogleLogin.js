import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import '../styles/GoogleLog.css';
import google from '../assets/images/google.png'

const clientId =
  '729697396176-tu03ksd9m28cf2js7ejh62oifkoaa5oa.apps.googleusercontent.com';

function GoogleLogin() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Vous avez réussi à vous connecter. Bienvenue ${res.profileObj.name} 😍. \n `
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Échec de connexion: res:', res);
    alert(
      `Échec de connexion. 😢 `
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <>
    <button onClick={signIn} className="button">
      
    <img src={google} alt="google login" className="icon"></img>

      <span className="buttonText">Se connecter avec Google</span>
    </button>

    </>
  );
}

export default GoogleLogin;