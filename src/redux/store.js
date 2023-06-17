import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import favouriteReducer from './wishlist/wishlistSlice';


const store = configureStore({
    reducer : {
        shopcart : cartReducer,
        favourite: favouriteReducer,
        }
})
export default store;