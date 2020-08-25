
import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    return (
        <div className='shop-container'>
            <div className="product-container">


                {
                    products.map(pd => <Product name={pd.name} image={pd.img} seller={pd.seller} price={pd.price} stock={pd.stock}></Product>)
                }

            </div>

            <div className="cart-container">
                <h3>This is cart</h3>
            </div>



        </div>
    );
};

export default Shop;