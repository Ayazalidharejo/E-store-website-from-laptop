import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const product_id =useParams()
    const [product,setproduct]=useState([])
    console.log(product);
    
    useEffect(()=>{

        const Productdata =axios.get(`https://fakestoreapi.com/products/${product_id}`).then((data)=>{setproduct(data);
        })
        
        
    },[])
  return (
    // <div> 
    //     {product?.map((item)=>{
    //         return(
    //             <>
    //             <img src={item?.image} alt="" />
                
                
    //             </>
    //         )
    //     })}
    // </div>
    <></>
  )
}

export default ProductDetails