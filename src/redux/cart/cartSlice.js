import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData : [],
    userInfo : null
}
export const cartSlice  = createSlice({
    name: 'shopcart',
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
            }
        },
        removeFromCart : (state, action) => {
            state.productData = state.productData.filter((item) => item.id !== action.payload)

        },
        increamentQuantity : (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id)
            if(item){
                item.quantity++;
            }
            
        },
        decrementQuantity : (state, action) => {
            const item = state.productData.find((item) => item.id === action.payload.id)
            if(item.quantity === 1){
                action.payload.quantity = 1
            }else{
                item.quantity--
            }
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload
        },
        clearUser: (state) => {
            state.userInfo = null;
        }           
        
    }
})

export const { addToCart, removeFromCart, increamentQuantity, decrementQuantity, addUser, clearUser,resetCart } = cartSlice.actions
export default cartSlice.reducer;