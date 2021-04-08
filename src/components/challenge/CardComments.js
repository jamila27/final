import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getchallenges } from "../../actions/challenge.actions";
import { isEmpty, timestampParser } from "../Utils";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ challenge }) => {
  const [text, setText] = useState("");
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(challenge._id, userData._id, text, userData.pseudo))
        .then(() => dispatch(getchallenges()))
        .then(() => setText(''));
    }
  };

  return (
    <div className="comments-container">
      {challenge.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            <div className="left-part">
              <img
                src={  
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === comment.commenterId) 
                      return user.img;
                      else return null;
                    })
                    .join("")
                }
               alt="commenter-pic"
              />
            </div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h3>{comment.commenterPseudo}</h3>
                 
                </div>
                <span style={{fontSize: "small", color:"#095b7c", opacity:"1"}}>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.text}</p>
              <EditDeleteComment comment={comment} challengeId={challenge._id} />
            </div>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Laisser un commentaire.."
          />
          <br></br>
          <button 
                className='btn--send' >Envoyer</button>

                <style type="text/css">
                {`
                .btn--send {

                  background-color: #f97304;
                  margin-top: 7px;
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
        </form>
      )}
    </div>
  );
};

export default CardComments;
