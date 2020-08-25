import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const header = () => {
    return (
        <div className = 'header'>
         <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/Manage">Manage Inventory here</a>
               
            </nav>
            <header className='inputArea'>
            <input className ='FromControl' type="text" placeholder ='type here to search'/>
                <button className='search'>Search</button>
            </header>
        </div>
    );
};

export default header;