import {combineReducers} from 'redux'
import { productReducer,slelectedProductReducer,handleCart } from './productReducer'
const reducers=combineReducers({
    allProducts:productReducer,
    product:slelectedProductReducer,
    addToCartAndRemove:handleCart
})
export default reducers;