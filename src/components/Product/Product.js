import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css' 
const Product = (props) => {
const {name, id , img , price } = props.product
    return (
        <div className='product'>
         <img src={img} alt="" />
         <div className='product-info'>
            <h3>{name}</h3>
            <p>{id}</p>
            <h5>Price:$ {price}</h5>
         </div>
         <button onClick={()=> props.addEventHandler(props.product)} className='btn-cart'><p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
         
        </div>
    );
};

export default Product;