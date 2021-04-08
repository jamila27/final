import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likechallenge, unlikechallenge } from "../../actions/challenge.actions";

const LikeButton = ({ challenge }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likechallenge(challenge._id, uid))
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikechallenge(challenge._id, uid))
    setLiked(false);
  };

  useEffect(() => {
    if (challenge.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, challenge.likers, liked]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un challenge !</div>
        </Popup>
      )}
      {uid && liked === false && (
        <img src="./img/icons/heart.svg" onClick={like} alt="like" />
      )}
      {uid && liked && (
        <img src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}
      <span>{challenge.likers.length}</span>
    </div>
  );
};

export default LikeButton;
