import React, { useState } from "react";
import Login from "./Login";

const Log = ( props ) => {

  const [signInModal, setSignInModal] = useState(props.signin);

  return (
    <div className="connection-form">
          {/* {signInModal && <Login />} */}
    </div>
  );
};

export default Log;
