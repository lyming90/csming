import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducers/index";

const initialState = {
  postList: null,
  postContent: null
};

const store = createStore(reducer, initialState, applyMiddleware(reduxThunk));

export default store;
