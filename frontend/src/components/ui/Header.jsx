import { useState } from "react";
import PropTypes from "prop-types";
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
import { Link as RouterLink } from "react-router-dom";
import AuthModal from "./modals/AuthModal";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from "react";

const drawerWidth = 240;
const navItems = [
  {
    route: "Home",
    link: "",
  },
  {
    route: "Search Bus",
    link: "search-bus",
  },
  {
    route: "About",
    link: "about",
  },
  {
    route: "Contact",
    link: "contact",
  },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // const [fixed,setFixed] = useState(false)

  // function setFixedFunc(){
  //    console.log(window.scrollY)
  //    if(window.scrollY>=100){
  //       setFixed(true)
  //    }else{
  //       setFixed(false)
  //    }
  // }
  // window.addEventListener("scroll",setFixedFunc)

  // useEffect(()=>{
    
  // },window.scrollY)
  


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Easy Bus
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={`/${item.link}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.route} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
   <Box sx={{position:'absolute',left:'0',top:'0'}}>
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor:"transparent",color:'#000000',py:"10px",px:"32px"}}>
          <Toolbar>
            <Box>
              <img src="https://i.ibb.co/VVDbGDv/bus.png" alt="" />
            </Box>
            <Typography
              variant="h4"
              color="#ffffff"
              fontWeight="600"
              component="div"
              paddingLeft={1}
              sx={{ flexGrow: 1 }}
            >
              Easy<Typography variant="p" sx={{color:"#FFA903"}}>Bus</Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={RouterLink}
                  to={`/${item.link}`}
                  sx={{
                    color: "#fff",
                    px:3,
                    gap:.5,
                    ':hover':{
                      color:"#FFA903"
                    }
                    }}
                >
                  {item.route}
                  <ArrowForwardIosIcon fontSize={"2px"} ></ArrowForwardIosIcon>
                </Button>
              ))}

              <Button variant="contained" onClick={handleClickOpen} sx={{fontWeight:600}}>
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
        </Box>
        <AuthModal open={open} setOpen={setOpen} />
      </Box>
   </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
