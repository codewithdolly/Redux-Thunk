import {ActionTypes} from "../Contants/actionTypes"
import productApi from "../../Components/apis/productApi";


export const fetchProducts =() => 

 async(dispatch)=>{
  const response= await productApi.get("/products")
  dispatch({type:ActionTypes.FETCH_PRODUCTS,
  payload:response.data,
  })
};

export const fetchProduct =(id) => 

 async(dispatch)=>{
  const response= await productApi.get(`/products/${id}`)
  dispatch({type:ActionTypes.SELECTED_PRODUCT,
  payload:response.data,
  })
};

// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };


export const removeSelectedProduct=()=>{
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}
