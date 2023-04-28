import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { productReducers } from './reducers/productReducers';


const rootReducer = combineReducers({
    products: productReducers
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;