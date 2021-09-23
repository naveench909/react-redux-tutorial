import React, { useEffect } from "react";
import {useDispatch,  useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from "./ProductComponent";
import { setProducts } from '../redux/actions/productAction';
const ProductListing = ()=> {
    const products = useSelector((state)=>state); 
    const dispatch = useDispatch();
    console.log(products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err" , err);
        });
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;