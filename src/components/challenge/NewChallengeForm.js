import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, timestampParser } from "../Utils";
import { NavLink } from "react-router-dom";
import { addchallenge, getchallenges } from "../../actions/challenge.actions";
import Button from '@material-ui/core/Button';

const NewChallengeForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [challengePicture, setchallengePicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.challengeError);
  const dispatch = useDispatch();
  
  const handlechallenge = async () => {
    if (message || challengePicture || video) {
      const data = new FormData();
      data.append('challengeerId', userData._id);
      data.append('message', message);
      if (file) data.append("file", file);
      data.append('video', video);
      dispatch(getchallenges());
      cancelchallenge(); await dispatch(addchallenge(data));
    } else {
      alert("Veuillez entrer un message")
    }
  };
 
  const handlePicture = (e) => {
    setchallengePicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setVideo('');
  }; 

  const cancelchallenge = () => {
    setMessage("");
    setchallengePicture("");
    setVideo("");
    setFile("");
  };


  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);

    const handleVideo = () => {
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          let embed = findLink[i].replace("watch?v=", "embed/");
          setVideo(embed.split("&")[0]);
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          setchallengePicture('');
        }
      }
    };
    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="challenge-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          
          <NavLink exact to="/profil">
            <div className="user-info">
              {/* <img src={userData.picture} alt="user-img" /> */}
            </div>
          </NavLink>
          <div className="challenge-form">
            <textarea
              name="message"
              id="message"
              
              placeholder="Déposer votre challenge.."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {message || challengePicture || video.length > 20 ? (
              <li className="card-container" style={{border:"none", marginLeft:"-2px"}}>
                <div className="card-left">
                  <img src={ "./uploads/profil/random-user.png"} alt="user-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3> <br></br>
                     <div className="content">
                     <p style={{fontSize: "small", color:"gray", opacity:"1"}}  >{message}</p>
                     </div>
                    </div>
                    <span style={{fontSize: "small", color:"#095b7c", opacity:"1"}}>{timestampParser(Date.now())}</span>
                    </div>

                  <div className="content" style={{height:"450px"}}>
                  
                  <div >
                    <img style={{width:"80%", height:"80%" , textAlign:"center"}}  src={challengePicture} alt=""  />
                  </div>
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                        style={{marginBottom:"10px"}}
                      ></iframe>
                    )}
                  </div>
                </div>
             
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="img" />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || challengePicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelchallenge}>
                    Annuler 
                  </button>
                ) : null}
                

                <button 
                className='btn--send' onClick={handlechallenge}>Envoyer</button>

                <style type="text/css">
                {`

.btn--send {

background-color: #f97304;

border-radius: 5px;
color: white;
font-weight: bold;
border: 2px solid #f97304;
}

.btn--send:hover {

  background-color: #f97304;
  
  border-radius: 5px;
  color: white;
  font-weight: bold;
  border: 2px solid #f97304;
  }

`}

              </style>
                
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewChallengeForm;
