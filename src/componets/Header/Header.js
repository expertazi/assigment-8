import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header-main'>
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
};

export default Header;