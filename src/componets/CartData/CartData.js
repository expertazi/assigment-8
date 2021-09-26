import React from 'react';

const CartData = (props) => {
    const {dataa} = props;
    return (
        <div>
            <p>Name : {dataa.name}</p>
        </div>
    );
};

export default CartData;