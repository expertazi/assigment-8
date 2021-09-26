import React from 'react';
import { useEffect,useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Body.css'

const Body = () => {
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setShowData(data))
    }, []);

    const [cart,setCart] = useState([]);
    const handleAddToCart=(dataBtn)=>{
        console.log(dataBtn.name);
        console.log(dataBtn);
        //   const newCart = [...cart,dataBtn];
        // setCart(newCart);
        // console.log(newCart);
      setCart(dataBtn.name)
    }

    return (
        <div className='datas-container'>
        <div className='data-container'>
            {
                showData.map(data=> <Data data={data} key={data.id} handleAddToCart={handleAddToCart} ></Data>)
            }
        </div>
        <div className='cart'>
                <h2>This is Cart</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Body;
