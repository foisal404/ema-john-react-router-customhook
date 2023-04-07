import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AppLink from '../AppLink/AppLink';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <AppLink to="/">Shop</AppLink>
                <AppLink to="/orders">Orders</AppLink>
                <AppLink to="/inventory">Inventory</AppLink>
                <AppLink to="/login">Login</AppLink>
            </div>
        </nav>
    );
};

export default Header;