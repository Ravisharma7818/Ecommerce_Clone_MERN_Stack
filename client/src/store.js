import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { newReviewReducer, productReducers, productReviewsReducer, reviewReducer } from './reducers/productReducers';
import { productDetailsReducer } from './reducers/productReducers';
import { authReducer, forgotPasswordReducer, userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducers';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducers/orderReducers';

const rootReducer = combineReducers({
    products: productReducers,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    review: reviewReducer,
    newReview: newReviewReducer,
    productReviews: productReviewsReducer,


})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;