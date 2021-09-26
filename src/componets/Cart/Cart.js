import React from 'react';




const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
             <p>Total Number : {props.length}</p>
             <p>Title : {cart}</p>
        </div>
    );
};

export default Cart;