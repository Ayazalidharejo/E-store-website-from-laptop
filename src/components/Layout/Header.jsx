import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProdectsCard from "../prodect-card/ProdectsCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge, Menu, MenuItem } from "@mui/material";
import { Link, Outlet,  } from "react-router-dom";
import DrawerItems from "../Drawer/DrawerItems";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

 

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{id:1, navItem:"home",navlink:"/"}, {id:2,navItem:"about",navlink:"/ProductDetails"}, {id:3, navItem:"Contact",navlink:"ProductDetails"}];

function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openItems, setOpenItems] = React.useState(false);
  const {Cartitem} = useSelector((state)=> state.Cart)
  // console.log(ItemCounter , "ItemCounter");
  
  const toggleOpenItems = (newOpen) => () => {
    setOpenItems(newOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link  key={item?.id} to={item?.navlink}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.navItem} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="mb-5" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            E-Store
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item?.id} to={item?.navlink}>
              <Button  sx={{ color: "#fff" }}>
                {item?.navItem}
              </Button>
              </Link>
            ))}

            <Button>
              <Badge badgeContent={Cartitem?.length} color="error">
                 <ShoppingCartIcon onClick={toggleOpenItems(true)} className="text-white" />
              </Badge>
              
            </Button>

            <Button
              className="text-white"
              id="basic-button"
              aria-controls={true ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={true ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className="text-black text-decoration-none" to="/sign-in">
                  My account
                </Link>
              </MenuItem>
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
       
      </nav>
      
      <DrawerItems openItems={openItems} toggleOpenItems={toggleOpenItems} />
<Outlet/>
    </Box>
  );
}

export default Header;
