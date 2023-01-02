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
import MenuIcon from "@mui/icons-material/Menu";
import Auth from "../../pages/auth/Auth";
import { AuthContext } from "../../context/AuthProvider";
import { Avatar, Menu, MenuItem } from "@mui/material";
import CustomModal from "./modals/CustomModal";
import { useCheckUserRoleByEmail } from "../../hooks/useCheckUserRole";

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
  const { userRole, loading } = useCheckUserRoleByEmail();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Easy Bus
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/"
            sx={{ textAlign: "center" }}
          >
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/search-bus"
            sx={{ textAlign: "center" }}
          >
            <ListItemText>Search Bus</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/about"
            sx={{ textAlign: "center" }}
          >
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/contact"
            sx={{ textAlign: "center" }}
          >
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </ListItem>

        {user?.uid && (
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/my-bookings"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>My Bookings</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {/* {loading && <>lo</>} */}
        {user?.uid && userRole === "admin" && (
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/dashboard"
              sx={{ textAlign: "center" }}
            >
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
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
            px: {
              xs: "3px",
              lg: "32px",
            },
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
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Button
                component={RouterLink}
                to="/"
                sx={{
                  px: 2,
                  color: "#fff",
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                Home
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                component={RouterLink}
                to="/search-bus/"
                sx={{
                  px: 2,
                  color: "#fff",
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                Search Bus
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                component={RouterLink}
                to="/about"
                sx={{
                  px: 2,
                  color: "#fff",
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                About
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                sx={{
                  px: 2,
                  color: "#fff",
                  gap: 0.5,
                  ":hover": {
                    color: "#FFA903",
                  },
                }}
              >
                Contact
                <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
              </Button>
              {user?.uid && (
                <Button
                  component={RouterLink}
                  to="/my-bookings"
                  sx={{
                    px: 2,
                    color: "#fff",
                    gap: 0.5,
                    ":hover": {
                      color: "#FFA903",
                    },
                  }}
                >
                  My Bookings
                  <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
                </Button>
              )}
              {user?.uid && userRole === "admin" && (
                <Button
                  component={RouterLink}
                  to="/dashboard"
                  sx={{
                    px: 2,
                    color: "#fff",
                    gap: 0.5,
                    ":hover": {
                      color: "#FFA903",
                    },
                  }}
                >
                  Dashboard
                  <ArrowForwardIosIcon fontSize={"2px"}></ArrowForwardIosIcon>
                </Button>
              )}

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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: "none", color: "#ffffff" } }}
            >
              <MenuIcon />
            </IconButton>
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
              display: { xs: "block", lg: "none" },
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
