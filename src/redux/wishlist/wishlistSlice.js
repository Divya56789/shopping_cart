import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlistData: [],
}


export const favouriteSlice = createSlice({
    name : 'favourite',
    initialState,
    reducers : {
        addToWishlist : (state, action) => {
            const item = state.wishlistData.find((item) => item.id === action.payload.id )
            if(!item){
                state.wishlistData.push(action.payload)
            }
        },
        removeFromWishlist : (state, action) => {
            state.wishlistData = state.wishlistData.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = favouriteSlice.actions;
export default favouriteSlice.reducer;