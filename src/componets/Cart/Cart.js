import React from 'react';
import CartData from '../CartData/CartData';
import './Cart.css'




const Cart = (props) => {
    const {cart} = props;
    // console.log(props)
    let total = '';
    for(const dataValue of cart){
       if(dataValue.deaths == 0){
       
       }
       else{
        total= total + dataValue.deaths;
       }

    }
    return (
        <div className='cart-main'>
         
             <h2>Deaths Total Summary</h2>
                <p> Total Country: {cart.length}</p>
                <p className='cart-main-p'>Total Deaths: <span>{total}</span></p>
                <h3 className='list-country-text'>List Of The Country 👍</h3>
                {
                cart.map( data => <CartData key={data.id} dataa={data}></CartData>)
            }
               
        </div>
    );
};

export default Cart;