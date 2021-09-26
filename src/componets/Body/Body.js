import React from 'react';
import { useEffect,useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Body.css'

const Body = () => {
    const [showData, setShowData] = useState([]);
    const [cartt,setCart] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setShowData(data))
    }, []);

    const handleAddToCart=(dataBtn)=>{
        console.log(dataBtn.name);
        console.log(dataBtn);
          const newCart = [...cartt,dataBtn];
        setCart(newCart);
        console.log(newCart.length);
    
    }

    return (
        <div className='datas-container'>
        <div className='data-container'>
            {
                showData.map(data=> <Data data={data} key={data.id} handleAddToCart={handleAddToCart} ></Data>)
            }
        </div>
        <div className='cart'>
               
                <Cart cart={cartt}></Cart>
            </div>
        </div>
    );
}

export default Body;
