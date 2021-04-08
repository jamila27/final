import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";
import { composeWithDevTools } from "redux-devtools-extension";
import { getchallenges } from "./actions/challenge.actions";
import { getEvenements} from "./actions/evenement.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


store.dispatch(getUsers());
store.dispatch(getchallenges());
store.dispatch(getEvenements());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
