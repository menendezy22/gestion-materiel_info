import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {useParams, useSearchParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions';


function CartScreen(props) {
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const qty = searchParams.get("qty");
    console.log(qty);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(id){
          dispatch(addToCart(id , qty));
        }
    },[dispatch,id, qty])
  return (
    <div>
        <h1>Cart Screen</h1>
        <p>Add to cart : id : {id}  qty : {qty}</p>
    </div>
  )
}

export default CartScreen;