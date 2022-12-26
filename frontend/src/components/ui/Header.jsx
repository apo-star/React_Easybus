import { useContext, useState } from "react";
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
import AuthModal from "./modals/AuthModal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import Auth from "../../pages/auth/Auth";
import { AuthContext } from "../../context/AuthProvider";
import { Avatar, Menu, MenuItem, Stack } from "@mui/material";

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
  {
    route: "My Bookings",
    link: "my-bookings",
  },
  {
    route: "Dashboard",
    link: "dashboard",
  },
];

function Header(props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const [fixed, setFixed] = useState(false);

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
    windows !== undefined ? () => windows().document.body : undefined;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { user, userSignOut } = useContext(AuthContext);

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
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={RouterLink}
                  to={`/${item.link}`}
                  sx={{
                    color: "#fff",
                    px: 3,
                    gap: 0.5,
                    ":hover": {
                      color: "#FFA903",
                    },
                  }}
                >
                  {item.route}
                  <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
                </Button>
              ))}

              {!user?.uid ? (
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
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
        <AuthModal open={open} setOpen={setOpen}>
          <Auth setOpen={setOpen} />
        </AuthModal>
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
