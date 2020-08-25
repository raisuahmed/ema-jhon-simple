import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {

    return (
        <div className='product'>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{props.name}</h4>
                <br />
                <p> <small>by: {props.seller}</small></p>
                <p>${props.price}</p>
                <br />
                <p><small>Only {props.stock} left in stock -Order Soon </small></p>
                <button className ='cart'><FontAwesomeIcon icon={faShoppingCart} />
Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;