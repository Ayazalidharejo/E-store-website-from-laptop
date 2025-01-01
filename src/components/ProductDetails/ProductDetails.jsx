import { Button, Grid, Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SkeltingDetail from './SkeltingDetail'
import { useDispatch, useSelector } from 'react-redux'
import { Addtocart } from '../Slices/Cart/Cart'

const ProductDetails = () => {
    const {product_id} =useParams()
    const [product,setproduct]=useState([])
    const [load ,setload]=useState(true)
    const {Cartitem}=useSelector((state)=>state.Cart)
    console.log(Cartitem ,"wish");
    const [productdetail,setproductdetail]=useState({})
    console.log(product);
    const Dispach =useDispatch()
    
    useEffect(()=>{

        const Productdata =axios.get(`https://fakestoreapi.com/products/${product_id}`).then((data)=>{setproduct(data.data);
          setload(false)
        })
       
        
        
    },[])
    useEffect(() => {
      const renderproduct = Cartitem.filter((item) => item?.id == product_id)[0];
      console.log(renderproduct,"renderproduct");
      setproductdetail(renderproduct)
    },[Cartitem])
    
    const isExis = Cartitem?.find(item=>item.id ==product_id)
  return (
    <>
{load?<SkeltingDetail/>:  <Grid container className=' d-flex align-items-center container mt-5'>
<Grid item sx={4} md={6}>




  <img style={{width:"200px"}}  src={product.image} alt="" />



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
{isExis&& <h2 className='d-flex justify-content-between'>
QTY:{productdetail?.quanitity}


</h2> }<br />
<Rating
                name="read-only"
                value={Math.round(product?.rating?.rate) || 0}
                readOnly
              />

<Button onClick={()=>(Dispach(Addtocart(product)))} variant='contained'> Add</Button>
</Grid>



</Grid>}

  </>
    
  )
}

export default ProductDetails