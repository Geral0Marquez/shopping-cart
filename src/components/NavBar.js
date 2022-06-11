import React, { useEffect, useState } from "react";
import { getCart } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CartSidebar from './CartSidebar';

const NavBar = () => {

 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };


 

  return (
    <div className="navbar">
      <div className="fixed">
        <nav>
          <div className="title">
            <h2 onClick={() => navigate("/")}>
              <i className="fa-brands fa-drupal"></i> Tech<span><i className="fa-solid fa-power-off"></i></span>n
            </h2>
          </div>

          <button className="icon" onClick={() => navigate("/login")} >
            <i className="fa-regular fa-user"></i>
          </button>

          <button onClick={() => navigate("/purchases")}className='icon'>
            <i className="fa-solid fa-tag"></i>
          </button>

          
          <button className="icon" onClick={handleShow}><i className="fa-solid fa-cart-shopping"></i></button>
         

        </nav>


      </div>
        <CartSidebar show={show} handleClose={handleClose}/>
    </div>
  );
};

export default NavBar;