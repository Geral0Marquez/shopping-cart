import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";
import Swal from "sweetalert2";


export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    }
  }
});

export const { setCart } = cartSlice.actions;

export const getCart = () => (dispatch) => {

  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))

}

export const addToCart = (addCart) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", addCart, getConfig())
    .then(() => {
      dispatch(getCart());
      Swal.fire({
        title: 'added product!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fC2757SyMrSdz2DBkx4fr8iI1v2WNkT2YzVaQbecIs1ZqjLGj1_LBTI11UPat6h9xf4&usqp=CAU',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: '#233DCB',
        confirmButtonText: 'Ok'
      })
      
      
     
    })
    .catch(error => console.log(error.response))
    .finally(() => dispatch(setIsLoading(false)));
    
}

export const purchaseCart = () => (dispatch) => {
 
  return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", {}, getConfig())
    .then(() => {
      dispatch(setCart([]))
      Swal.fire({
        title: 'Thanks for visiting us!',
        text: 'your purchase has been a success.',
        imageUrl: 'https://st2.depositphotos.com/1024381/5201/i/600/depositphotos_52017239-stock-photo-shopping-girls.jpg',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: '#233DCB',
        confirmButtonText: 'Ok'
      })
     
    })

    .catch(error => console.log(error.response))
 
}

export const deleteProduct = (productId) => (dispatch) => {

  return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productId}`, getConfig())
    .then(() => { dispatch(getCart())
      Swal.fire({
        title: 'Returned product!',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3163/3163274.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: '#233DCB',
        cancelButtonColor: '#233DCB',
        confirmButtonText: 'Accept'
      })
     

    })
   
    
}




export default cartSlice.reducer;