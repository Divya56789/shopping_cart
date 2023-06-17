import React from 'react'
import { CartItem } from '../components';


function Cart() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem 0rem", backgroundColor:"whitesmoke"}}>
      <CartItem/>
    </div>
  )
}

export default Cart;