import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] =  useState([])
    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addeventhandler = (product) => {
      console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                      key={product.id}
                      product={product}
                      addEventHandler={addeventhandler}
                    ></Product> )
                }
            </div>
            <div className="card-container">
                card com 2
            </div>
        </div>
    );
};

export default Shop;