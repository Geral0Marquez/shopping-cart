import React from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from "../store/slices/cart.slice";



const ProductCart = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    


    const addCart = (id)=>{
        const productToAdd={
            id:id,
            quantity:1
        }
        if(localStorage.getItem("token")){
            dispatch(addToCart(productToAdd));
        } else {
            navigate("/login");
        }
       
    }

    

    return (
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <div className="image">
                    <img src={product.productImgs?.[1]} alt="" className="over" />
                    <img src={product.productImgs?.[0]} alt="" />
                </div>
                <div className="info">
                    <span className="brand">{product.brand}</span>
                    <strong>{product.title}</strong>
                    <span className='price'>Price</span>
                    <span className="amount">$ {product.price}</span>
                </div>
            </Link>
            <button className='cart-button' onClick={() => addCart(product.id)}>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
        
    );
};

export default ProductCart;