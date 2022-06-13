import {applyMiddleware, combineReducers, compose, legacy_createStore as   createStore } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const initialState= {} ;

const reducer = combineReducers({
    productList : productListReducer,
    productDetails:productDetailsReducer,
    cart : cartReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState , 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;