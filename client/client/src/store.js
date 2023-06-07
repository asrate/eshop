import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const intialState = {};
const middleware = [thunk];

let store;
try {
  store = createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middleware))
  );
} catch (error) {
  store = createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middleware))
  );
}
export default store;
