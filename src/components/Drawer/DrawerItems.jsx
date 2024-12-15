import { Box, Button, Drawer, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, dicreasequantity, Increasequantity } from '../Slices/Cart/Cart';


const DrawerItems = (props) => {
   const {openItems, toggleOpenItems} = props


   const {Cartitem} = useSelector((state)=> state.Cart)
   const usedispach =useDispatch()
   console.log(Cartitem);
   
  return (
    <>
          <Drawer open={openItems} onClose={toggleOpenItems(false)}>
            <Box sx={{width:"350px"}}>
                <h1>cartItems</h1>
                {Cartitem && Cartitem.map((item)=>{
  return(
    <div className="row my-4">
      <div className="col-7 d-flex ">
      <img width={60} src={item.image} alt="" />
    <Box className="mx-2  mt-3" >
    
    <Typography> {item.title.length>15? `${item.title.slice(0,15)}...`:item.title} </Typography>
    <Typography> {item.category} </Typography>
    <Typography> {item.price} <span>Qty: {item?.quanitity} </span> </Typography>
    </Box>
    </div>
    <Box className="col-3 pe-4" >
<Button variant='outlined' className='ms-5'> <AddIcon onClick={()=> (usedispach(Increasequantity(item)))} /> </Button> <br />
<Button variant='outlined' className='ms-5 my-1'> <RemoveIcon onClick={()=> (usedispach(dicreasequantity(item)))}/></Button> <br />
<Button variant='outlined' className='ms-5'> <DeleteIcon onClick={()=> (usedispach(Delete(item)))}/></Button>

    </Box>
    </div>
  )
})} 
            </Box>
          </Drawer>

    </>
  )
}

export default DrawerItems