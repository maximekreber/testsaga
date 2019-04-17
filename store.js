import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ageReducer from './redux/reducers/ageReducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(ageReducer, applyMiddleware(sagaMiddleware));

export default store;