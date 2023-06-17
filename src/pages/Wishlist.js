import React from 'react'
import { WishlistItem } from '../components';

function Wishlist() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem 0rem", backgroundColor:"whitesmoke"}}>
      <WishlistItem/>
    </div>
  )
}

export default Wishlist;