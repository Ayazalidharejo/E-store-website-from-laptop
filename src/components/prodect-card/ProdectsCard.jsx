import {
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Rating,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import VisibilityIcon from '@mui/icons-material/Visibility';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addtocart } from "../Slices/Cart/Cart";

const ProdectsCard = () => {

  const [Updatearry,setUpdatearry]=useState([])
  const [Products, setProducts] = useState([]);
  const [isLoad , setLoad] = useState(true)
  const [categoryArr , setCategory] = useState([])
  const dispach =useDispatch()

  const filterProducts = (categoryProduct) => {
    const filterCategory = Products.filter((item) => item.category === categoryProduct.value)

    setUpdatearry(filterCategory)
   
  }

  useEffect(() => {
    const ProduCards = axios
      .get("https://fakestoreapi.com/products")
      .then((data) => {
       
       

        const categoryArr = data?.data?.map((item) => {
          return {
            label : item.category,
            value : item.category
          }
        }) 

        const uniqueArr = categoryArr.filter((item,index,self) => index === self.findIndex((t) => t.value === item.value)) 
       
        
        setCategory(uniqueArr)
        setProducts(data.data);
        setUpdatearry(data.data);
      
        setLoad(false)
        
        
      

      });

      
  }, []);


  return (
    <div className="mt-5">
       <Box  >
   <Autocomplete
      disablePortal
      options={categoryArr}
      sx={{ width: 300 }}
      onChange={(e, newValue) => {
       
        
      filterProducts(newValue);
        
      }}
      renderInput={(params) => <TextField className="mt-5" {...params} label="Category" />}
    />
   </Box>
      <Grid container >

        { isLoad ? <Box className="my-5 w-100 text-center">
          <CircularProgress size="3rem" />
        </Box> :
       Updatearry?.map((product) => (
          <Grid item sm={2} md={3} sx={3}>
            <Card style={{minHeight:"380px",maxHeight:"380px"}}  className="text-center px-3 m-3 ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
              
                    <SwiperSlide>
                      <img style={{maxHeight:"220px",minHeight:"220px",minWidth:"220px",maxWidth:"220px"}}
                        src={product.image}
                    
                        alt={product.title}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img style={{maxHeight:"220px",minHeight:"220px",minWidth:"220px",maxWidth:"220px"}}
                        src={product.image}
                    
                        alt={product.title}
                      />
                    </SwiperSlide>
                 

               
                
              </Swiper>
              <Box >
                <Typography variant="body2" className="mt-2 text-start">
                  {product?.category?.name}
                </Typography>
                <Tooltip title={product.title} placement="top">
                <Typography variant="h6" className="mt-2 ">
                  {product?.title?.length>20? `${product.title.slice(0,20)}...`: product.title}
                </Typography>
                </Tooltip>
                <Rating
                  name="read-only"
                  value={Math.round(product?.rating?.rate) || 0}
                  readOnly
                />
                <Typography variant="h6" className="tex">
                  ${product?.price}
                </Typography>
              <Box className="d-flex justify-content-between">  

              <Tooltip title="View details">
                <Link to= {`/ProductDetails/${product?.id}`} >
                <Button >  <VisibilityIcon/> </Button>
                </Link>
                </Tooltip>
                <Button onClick={()=>dispach(Addtocart(product))} className="my-3" variant="contained">
                  <AddIcon /> Add
                </Button> </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProdectsCard;
