import { useContext, useState, useEffect } from "react";
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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Auth from "../../pages/auth/Auth";
import { AuthContext } from "../../context/AuthProvider";
import { Avatar, Menu, MenuItem } from "@mui/material";
import CustomModal from "./modals/CustomModal";

const drawerWidth = 240;

function Header(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [fixed, setFixed] = useState(false);
  const { user, userSignOut } = useContext(AuthContext);
  // const [admin, setAdmin] = useState();
  function setFixedFunc() {
    if (window.scrollY >= 80) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixedFunc);
  }, [window.scroll]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/user/role")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // console.log(admin.data.role)
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", zIndex: "1000", color: "white" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Easy Bus
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <RouterLink to="/">Home</RouterLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <RouterLink to="/search-bus">Search Bus</RouterLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <RouterLink to="/about">About</RouterLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              {user?.uid && (
                <RouterLink to="/my-bookings">My Bookings</RouterLink>
              )}
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <RouterLink to="/dashboard">Dashboard</RouterLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    windows !== undefined ? () => windows().document.body : undefined;
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box sx={{ position: "absolute", left: "0", top: "0" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: `${
              fixed || location.pathname !== "/" ? "#212529" : "transparent"
            }`,
            color: "#000000",
            py: "10px",
            px: "32px",
          }}
        >
          <Toolbar>
            <Box>
              <img src="https://i.ibb.co/VVDbGDv/bus.png" alt="" />
            </Box>
            <Typography
              variant="h4"
              color="#ffffff"
              fontWeight="600"
              component={RouterLink}
              to="/"
              paddingLeft={1}
              sx={{ flexGrow: 1, textDecoration: "none" }}
            >
              Easy
              <Typography variant="p" sx={{ color: "#FFA903" }}>
                Bus
              </Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                sx={{
                  px: 3,
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                <RouterLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/"
                >
                  Home
                </RouterLink>
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                sx={{
                  px: 3,
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                <RouterLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/search-bus"
                >
                  Search Bus
                </RouterLink>
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                sx={{
                  px: 3,
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                <RouterLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/about"
                >
                  About
                </RouterLink>
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                sx={{
                  px: 3,
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                <RouterLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/contact"
                >
                  Contact
                </RouterLink>
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              {user?.uid && (
                <Button
                  sx={{
                    px: 3,
                    gap: 0.5,
                    ":hover": {
                      color: "#FFA903",
                    },
                  }}
                >
                  <RouterLink
                    style={{ textDecoration: "none", color: "#fff" }}
                    to="/my-bookings"
                  >
                    My Bookings
                  </RouterLink>
                  <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
                </Button>
              )}
              <Button
                sx={{
                  px: 3,
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                <RouterLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/dashboard"
                >
                  Dashboard
                </RouterLink>
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>

              {!user?.uid ? (
                <Button
                  variant="contained"
                  onClick={pathname !== "/login" && handleClickOpen}
                  sx={{ fontWeight: 600 }}
                >
                  Sign In
                </Button>
              ) : (
                <>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={user.photoURL ? user.photoURL : "/broken-image.jpg"}
                    />
                  </IconButton>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => userSignOut()}
                      >
                        Log out
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              )}
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
        <CustomModal open={open} setOpen={setOpen}>
          <Auth setOpen={setOpen} />
        </CustomModal>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  windows: PropTypes.func,
};

export default Header;
