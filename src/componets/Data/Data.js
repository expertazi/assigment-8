import React from 'react';
import './Data.css'

const Data = (props) => {
    const {name,code,img,population,deaths,confirmed,recovered,critical} = props.data;
    return (
        <div className='data-list'>
        <div className='data-list-single'>
            <img src={img} alt="" />
            <h2>Country Name: {name}</h2>
            <p>Country Code: {code}</p>
            <p>Population: {population}</p>
            <p>Deaths: {deaths}</p>
            <p>Confirmed: {confirmed}</p>
            <p>Recovered: {recovered}</p>
            <p>Critical: {critical}</p>
            <button onClick={() => props.handleAddToCart(props.data)}>Add To Cart</button>
        </div>
        </div>
    );
};

export default Data;