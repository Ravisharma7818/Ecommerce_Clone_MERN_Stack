import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';


const rootReducer = combineReducers({

})


// let initialState = {
//     cart: []
// }


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;