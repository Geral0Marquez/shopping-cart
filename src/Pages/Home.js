import React, { useEffect, useState } from 'react';
import { filterProducts, getProducts, filterCategory } from '../store/slices/products.slice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductCart from '../components/ProductCart';


const Home = () => {
    
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
   


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

                            <li key={productItem.id}>
                              <ProductCart product={productItem} />

                            </li>


                        ))}

                </div>

            </section>
        </div>




    );
};

export default Home;