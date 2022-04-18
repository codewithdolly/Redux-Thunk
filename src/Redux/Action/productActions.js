import { ActionTypes } from "../Contants/actionTypes";
import productApi from "../../Components/apis/productApi";

//async API call
export const fetchProducts = () => async (dispatch) => {
  const response = await productApi.get("/products"); //return data
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await productApi.get(`/products/${id}`); //return single data
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
