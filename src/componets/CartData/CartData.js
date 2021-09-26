import React from 'react';
import './CartData.css'

const CartData = (props) => {
    const {dataa} = props;
    return (
        <div>
           
            <p className='for-cart'> <img className='img-for-cart' src={dataa.img} alt="" />  <span> {dataa.name}</span></p>
        </div>
    );
};

export default CartData;