import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";
import axios from "axios";
import { useEffect } from "react";
import {setProducts} from '../redux/actions/productActions'
import HomeBackground from '../components/HomeBackground'
const ProductList = () => {
  const products = useSelector((state) => state);
  // console.log("products", products);
  const dispatch=useDispatch()

  const fetchProducts= async ()=>{
    const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log("Error=",err);
    })
    dispatch(setProducts(response.data));

  }
useEffect(() => {
 fetchProducts()
},[])
console.log("products=",products);

  return (
    <div>
      <HomeBackground/>
      <ProductComponents />
    </div>
  );
};

export default ProductList;
