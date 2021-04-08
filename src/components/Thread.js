import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getchallenges } from "../actions/challenge.actions";
import Card from "./challenge/Card";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadchallenge, setLoadchallenge] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  const challenges = useSelector((state) => state.challengeReducer);

  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
      setLoadchallenge(true);
    }
  }

  useEffect(() => {
    if (loadchallenge) {
      dispatch(getchallenges(count));
      setLoadchallenge(false);
      setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadchallenge, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(challenges[0]) &&
          challenges.map((challenge) => {
            return <Card challenge={challenge} key={challenge._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
