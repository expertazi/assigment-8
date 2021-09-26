import React from 'react';
import CartData from '../CartData/CartData';




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
        <div>
         
             <h2>Total Summary</h2>
                <p>Total: {cart.length}</p>
                <p>Total Deaths: {total}</p>

                {
                cart.map( data => <CartData key={data.id} dataa={data}></CartData>)
            }
               
        </div>
    );
};

export default Cart;