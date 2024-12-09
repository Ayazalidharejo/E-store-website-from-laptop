import { Grid, Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {product_id} =useParams()
    const [product,setproduct]=useState([])
    console.log(product);
    
    
    useEffect(()=>{

        const Productdata =axios.get(`https://fakestoreapi.com/products/${product_id}`).then((data)=>{setproduct(data.data);
         
        })
       
        
        
    },[])
    console.log(product);
    
  return (
    
  <Grid container className=' d-flex align-items-center'>
<Grid item sx={4} md={6}>

  

 
    <img  src={product.image} alt="" />
  


</Grid>
<Grid item  sx={2} md={6}>


<span>
  {product.title}
</span>

<h5>
  {product.category}
</h5>
<p>

  {product.description}
</p>
<h2>
  {product.price}
</h2> <br />
<Rating
                  name="read-only"
                  value={Math.round(product?.rating?.rate) || 0}
                  readOnly
                />
  


</Grid>



  </Grid>

    
    
  )
}

export default ProductDetails