import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header-frist'>
             <div>
             <div className='header-frist-inside'>
               <h1>Protect Yourself and Others From Covid-19</h1>
                <p>Here is The Total Report About Covid. You can see here How many People are already Deaths, Confirmed, Recovered, Critical. Also, You can Make Total Calculations. </p>
               </div>

                <nav className='header-nav'>
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
             </div>
            </div>
          
        </div>
    );
};

export default Header;