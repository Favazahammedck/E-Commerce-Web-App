import {ActionsType} from '../constants/action-types';
export const setProducts=(products)=>{
    return{
        type:ActionsType.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:ActionsType.SELECTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:ActionsType.REMOVE_SELECTED_PRODUCTS,
    }
}

export const addToCart =(product)=>{
    return{
        type:ActionsType.ADD_ITEM_TO_CART,
        payload:product
    }
}

// export const deleteCart=(product)=>{
//     return{
//         type:ActionsType.DELELTE_ITEM_FROM_CART,
//         payload:product
//     }

// }