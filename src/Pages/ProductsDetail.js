import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory } from '../store/slices/products.slice';
import { addToCart } from "../store/slices/cart.slice";




const ProductsDetail = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    const productList = useSelector(state => state.products)
    const dispatch = useDispatch();
    const images = product?.productImgs
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
   
    const addCart = ()=>{
        const productToAdd={
            id:id,
            quantity:quantity
        }
        if(localStorage.getItem("token")){
            dispatch(addToCart(productToAdd));
        } else {
            navigate("/login");
        }
       
    }

    const [currentImage, setCurrentImage] = useState(1);
    const percent = 100 / images?.length;

    const listStyles = {
        width: `${100 * images?.length}%`,
        transform: `translateX(-${(currentImage - 1) * percent}%)`
    }

    

    useEffect(() => {

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/")
            .then(res => {
                const productsSearched = res.data.data.products.find(
                    (productItem) => productItem.id === Number(id)
                );
                setProduct(productsSearched);
                dispatch(filterCategory(productsSearched.category?.id))
            });

    }, [dispatch, id]);

    console.log(product)

    return (

        <section className='product-detail main-container'>
            <div className="leaded">
                <a href="#/">Home</a>
                <div className="separator"></div>
                <b>{product?.title}</b>
            </div>

            <div className="product-info-flex">

                <div className="col">
                    <div className="images-gallery">
                        <div className="gallery">
                            <div className="button-gallery left">
                                <button
                                    onClick={() => setCurrentImage(currentImage - 1)}
                                    disabled={currentImage <= 1}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                            </div>
                            <div className="button-gallery right">
                                <button
                                    onClick={() => setCurrentImage(currentImage + 1)}
                                    disabled={currentImage >= images?.length}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>

                            <ul className="images-list" style={listStyles}>
                                {
                                    images?.map(image => (
                                        <li key={image}>
                                            <img src={image} alt="" />
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <ul className="images-preview">
                            {
                                images?.map((image, i) => (
                                    <li
                                        key={image}
                                        className={currentImage === i + 1 ? 'selected' : ''}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            onClick={() => setCurrentImage(i + 1)}
                                        />
                                    </li>
                                ))
                            }
                        </ul>


                    </div>
                </div>
                <div className="col">
                    <div className="product-info">
                        <div className="brand">
                            {product?.brand}
                        </div>
                        <h2>{product?.title}</h2>
                        <div className="product-data">
                            <div className="product-options">
                                <div className="flex">
                                    <div className="price">
                                        <span className='label'>Price</span>
                                        <span className="amount">
                                            $ {product?.price}
                                        </span>
                                    </div>
                                    <div className="quantity">
                                        <div className="label">Quantity</div>
                                        <div className="flex">
                                            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1} className="minus" >
                                              -
                                            </button>
                                            <div className="value">
                                                {quantity}
                                            </div>

                                            <button onClick={() => setQuantity(quantity + 1)} className="plus">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="add-cart-button"  onClick={addCart} >
                                    Add to cart <i className='icon-shopping-cart'></i>
                                </button>
                            </div>
                            <p className='product-description'>
                                {product?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="suggestions">
                <strong>
                    Discover similar items
                </strong>
                <ul>


                    {productList.map((productItem) => (
                        <li  key={productItem.id} onClick={() => navigate(`/products/${productItem.id}`)}>
                            <div className='product-card'> <div className='image'>
                                <img src={productItem.productImgs[1]} alt="" className="over" />
                                <img src={productItem.productImgs?.[0]} alt="" />
                            </div>
                                <div className='info'>
                                    <strong>{productItem.title}</strong>
                                    <span className='price'>Price</span>
                                    <span className="amount">$ {productItem.price}</span>
                                </div>
                                <button className='cart-button' onClick={addCart}  >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>


        </section>
    );
};

export default ProductsDetail;