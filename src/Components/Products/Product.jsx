import React, { useEffect, useState } from 'react'
// import HERO from "../images/3.jpg"
// import HERO2 from "../images/product-img-10.jpg"
// import HERO3 from "../images/product-img-11.jpg"
// import HERO4 from "../images/product-img-12.jpg"
// import HERO5 from "../images/product-img-8.jpg"
import { Button, Card, Rating, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'

// const Productdata =[
//   {
//     Name : "Haldiram's Sev Bhujia",
//     Catogry:'Snack & Munchies',
   
//     img:HERO,
//     Price:130
//   },
//   {
//     Name : "Haldiram's Sev Bhujia",
//     Catogry:'Snack & Munchies',
  
//     img:HERO2,
//     Price:10
//   },
//   {
//     Name : "Haldiram's Sev Bhujia",
//     Catogry:'Snack & Munchies',
 
//     img:HERO3,
//     Price:90
//   },
//   {
//     Name : "Haldiram's Sev Bhujia",
//     Catogry:'Snack & Munchies',
 
//     img:HERO4,
//     Price:120
//   },
//   {
//     Name : "Haldiram's Sev Bhujia",
//     Catogry:'Snack & Munchies',
   
//     img:HERO5,
//     Price:200
//   },
// ]



const Product = () => {
const [ProductData,setProductData]=useState([])
console.log(ProductData)
  
useEffect (()=>{
const APIProductdata =axios.get ("https://api.escuelajs.co/api/v1/products").then((data)=>setProductData(data.data)
)



},[])
  return (
    <div className='d-flex gap-2'> 
      {ProductData.map((Product)=>{
      return(
       
        <Card className='p-2 shadow'>
<img className='w-75 h-50' src={Product.image} alt="" />
<Typography variant='body2'>{Product.Name}</Typography>

<Typography variant='h5'> {Product.  Rating }</Typography>
<Typography variant='h6'> {Product.Catogry}</Typography>
<Typography variant='body1'>  <Rating name="read-only" value={4} readOnly /> {Product. Price}</Typography>
<box className="d-flex justify-content-between  align-items-center"> <Typography variant='body1'> {Product. Price}</Typography>
<Button size='small' variant='contained'> <AddIcon/>  Add</Button>
</box>
        </Card>
     
      )
      }) }
     </div>
  )
}

export default Product