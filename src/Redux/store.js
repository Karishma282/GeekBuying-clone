import {
  legacy_createStore,
  combineReducers,
  applyMiddleware ,
  compose
} from "redux";

import {reducer_auth} from "./auth/reducer";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  auth :reducer_auth
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );
