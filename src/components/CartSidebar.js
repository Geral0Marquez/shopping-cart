import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { purchaseCart, deleteProduct} from "../store/slices/cart.slice"

const CartSidebar = ({ show, handleClose }) => {
    const cartItem = useSelector(state => state.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const PurchaseExit = () => {
        dispatch(purchaseCart())
        navigate("/purchases");
    }

    const remove = (product) => {
        dispatch(deleteProduct(product))
    }

    const TotalProducts = (cartItem) => {
        let total = 0;
        cartItem?.forEach(product => {
            total = total + (+product.price * product.productsInCart.quantity)

        });
        return total
    }

    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton className='title-cart'>
                <Offcanvas.Title className='mx-auto'><h4>Shopping cart</h4></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='cart'>
                    <div className="minimalist-scrollbar">
                        <ul className="cart-products-list">
                            {
                                cartItem?.map(product => (
                                    <li key={product.id} >
                                        <div className="product-info">
                                            <div className='details'>
                                                <span className="brand">{product.brand}</span>
                                                <Link to={`/products/${product.id}`}className="name"  onClick={handleClose}>
                                                    {product.title}
                                                </Link>
                                                <div className="quantity">
                                                    {product.productsInCart?.quantity}
                                                </div>
                                            </div>
                                            <div className="button-delete">
                                                <button onClick={() => remove(product.id)}>
                                                    <i className="fa-solid fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="total">
                                            <span className="label">Total: </span>
                                            <b>$ {product.price * product.productsInCart?.quantity}</b>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="checkout-section">
                        <div className="total">
                            <span className="label">Total:</span>
                            <b>$ {TotalProducts(cartItem)}</b>
                        </div>

                        <button className='buy-button' onClick={PurchaseExit} disabled={!Boolean(cartItem)}>
                            Checkout
                        </button>
                    </div>
                </div>

            </Offcanvas.Body>
        </Offcanvas>




    );
};

export default CartSidebar;