import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      return action.payload;
    }
  }
});

export const { setPurchases } = purchasesSlice.actions;

export const getPurchases = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
    .then(res => {
      const purchases = res.data.data.purchases.sort((a, b) => {
        const prevDate = new Date(a.createdAt)
        const nextDate = new Date(b.createdAt)
        console.log(a.createdAt)
        return nextDate - prevDate;
      });
      console.log(purchases)
      dispatch(setPurchases(purchases));
    })
    .finally(() => dispatch(setIsLoading(false)));

};

export default purchasesSlice.reducer;
