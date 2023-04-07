import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';


const Orders = () => {
    let Addedcart=useLoaderData();
    const [cart,setCart]=useState(Addedcart)

    const removeItemHandler=(id)=>{
        let remainingCart=cart.filter(pro=>pro.id!=id);
        setCart(remainingCart)

        removeFromDb(id)
    }
    const removeAllCartHandler=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    console.log(cart);
    return (
        <div className='Order-container'>
            <div className='Item-container'>
                {
                    cart.map(cartitems=><ReviewItem key={cartitems.id} cartitems={cartitems}  removeItemHandler={removeItemHandler}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} removeAllCartHandler={removeAllCartHandler}>
                <div><button className='review-btn'><Link to="/inventory">Order proceed</Link></button></div>
                </Cart>
                
            </div>
        </div>
    );
};

export default Orders;