import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { filterProducts, getProducts, filterCategory } from '../store/slices/products.slice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart } from "../store/slices/cart.slice";

const Home = () => {
    
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const addCart = (id)=>{
        const productToAdd={
            id:id
        }
        if(localStorage.getItem("token")){
            dispatch(addToCart(productToAdd));
        } else {
            navigate("/login");
        }
       
    }


    const filterItem = () => {
        dispatch(filterProducts(search));
    }

   

    useEffect(() => {
        dispatch(getProducts());
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))

    }, [dispatch])



    const selectCategory = (id) => {
        dispatch(filterCategory(id));
    }

    console.log(products)

    return (
        <div className='home'>
            <section className='main-container'>
                <div className='search-box grid-c' >
                    <form className="input" >
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button onClick={filterItem}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <aside>

                        <div className={`filter-category ${isOpen ? '' : 'closed'}`}>
                            <div className="header" onClick={() => setIsOpen(!isOpen)}><span>Category</span><i className="fa-solid fa-angle-down"></i></div>
                            <div className='content'>
                                {
                                    categories?.map(category => (
                                        <ul  key={category.id} onClick={() => selectCategory(category.id)}>
                                           {category.name} 
                                        </ul>
                                    ))

                                }


                            </div>

                        </div>
                    </aside>
                </div>

                <div className='products-list'>

                    {
                        products?.map(productItem => (

                            <li key={productItem.id} onClick={() => navigate(`/products/${productItem.id}/`)}>
                                <div className='product-card'> <div className='image'>
                                    <img src={productItem.productImgs[1]} alt="" className="over" />
                                    <img src={productItem.productImgs?.[0]} alt="" />
                                </div>
                                    <div className='info'>
                                        <strong>{productItem.title}</strong>
                                        <span className='price'>Price</span>
                                        <span className="amount">$ {productItem.price}</span>
                                    </div>
                                    <button className='cart-button' onClick={() => addCart(productItem.id)} >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        
                                    </button>
                                </div>



                            </li>


                        ))}

                </div>

            </section>
        </div>




    );
};

export default Home;