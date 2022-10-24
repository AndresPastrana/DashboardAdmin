//  StoreCreator , recive lo(s) reducer como para metro y crea el store
// combineReducers, esta funcion retorana cada un objeto con cada uno de nuestros reducers
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";

import { dashboardReducer } from "./reducers/dashboardReducer";
import { uiReducer } from "./reducers/uiReducer";
// eslint-disable-next-line no-undef
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  ui: uiReducer,
});
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
