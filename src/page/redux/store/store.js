import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "../reducers/root-reducer";
import loadingReducer from "../reducers/loading";
import messageReducer from "../reducers/message";
import authReducer from "../reducers/auth";
import usersReducers from "../reducers/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import subscribeReducer from "../reducers/subscribe";
import contactsReducer from "../reducers/contactTable";
import registerReducer from "../reducers/registerClient";
import postClientReducer from "../reducers/postClient";
const middlewares = [reduxThunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const reducer = combineReducers({
  loading: loadingReducer,
  message: messageReducer,
  auth: authReducer,
  users: usersReducers,
  subscribe: subscribeReducer,
  contacts: contactsReducer,
  registerClt: registerReducer,
  postclient : postClientReducer
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
};
const persistReducers = persistReducer(persistConfig, reducer);

const initialState = {};
// const store = createStore(rootReducer,persistReducers, applyMiddleware(...middlewares));
const store = createStore(
  persistReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
const persist = persistStore(store);
export default store;
export { persist };
