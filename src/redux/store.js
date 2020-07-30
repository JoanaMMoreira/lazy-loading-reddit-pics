import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { imagesReducer } from "./reducer";

const store = createStore(
  imagesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
