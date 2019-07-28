import { combineReducers } from 'redux'

import cartReducer from '../redux/cart/cart-reducer'



export default combineReducers({
    cart:cartReducer
});