import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import HERO from "../images/3.jpg"
import HERO2 from "../images/product-img-10.jpg"
import HERO3 from "../images/product-img-11.jpg"
import HERO4 from "../images/product-img-12.jpg"
import HERO5 from "../images/product-img-8.jpg"
import {  Card , Rating } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import axios from 'axios';

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


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 340;
const navItems = ['Home', 'About', 'Contact'];

 function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const [Productdata,setProductData]=React.useState([])
  React.useEffect(()=>{
const APIProductData =axios.get("https://api.escuelajs.co/api/v1/products").then((data)=>{setProductData(data.data);
})
console.log(APIProductData);


  },[])
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  
  return (
    <>
    <Box className="" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            E-Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
              <Button className='text-white'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}> <Link to="/signin">My account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
  
      </Box>
    </Box>
      <Grid className='container' container> 
      {Productdata.map((Product)=>{
      return(
       
     <Grid item md={4} sx={4}>

<Card className='p-2 shadow'>
<img style={{minHeight:'220px',maxHeight:"220px", minWidth:"380px",maxWidth:"380px"}} className='w-75 h-50' src={Product.images[0]} alt="" />
<Typography variant='body2'>{Product.title}</Typography>

<Typography variant='h5'> {Product.price }</Typography>
<Typography variant='body1'> {Product?.creationAt }</Typography>
<Typography variant='h6'> {Product?.description?.length >=15?`${Product?.description.slice(0,15)}...`:Product?.description}</Typography>


<box className="d-flex justify-content-between  align-items-center">
<Typography variant='body1'>  <Rating name="read-only" value={Product?.id?.rating?.rate} readOnly />
{Product?.id?.rating?.rate}</Typography>
<Button size='small' variant='contained'> <AddIcon/>  Add</Button>
</box>
        </Card>

     </Grid>
     
      )
      }) }
     </Grid>
</>  
);
}
export default Header