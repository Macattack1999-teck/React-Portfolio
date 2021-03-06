import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from "react-redux-firebase";
import firebaseConfig from "./config/fbConfig";
import firebase from "firebase/app";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebaseConfig)
  )
);


const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  presence: 'presence',
  sessions: 'sessions'
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return (
    <div className='loading-wrapper'>
      <div className='loading-gif' style={{backgroundImage: "url(https://i.gifer.com/IXNp.gif)"}}></div>
      <div className='loading-text'>
        loading...
      </div>
    </div>
  )
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
