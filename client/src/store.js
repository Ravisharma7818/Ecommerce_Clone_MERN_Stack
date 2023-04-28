import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { productReducers } from './reducers/productReducers';
import { productDetailsReducer } from './reducers/productReducers';

const rootReducer = combineReducers({
    products: productReducers,
    productDetails: productDetailsReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;