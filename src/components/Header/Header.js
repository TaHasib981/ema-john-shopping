import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div className='navLink'>
                    <a href="/home">Home</a>
                    <a href="/product">Product</a>
                    <a href="cart">Cart</a>
                    <a href="about">About</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;