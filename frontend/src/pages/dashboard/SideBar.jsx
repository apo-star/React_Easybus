import React from 'react';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from "@mui/icons-material/Group";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link } from 'react-router-dom';


// const drawerWidth = 240;
const SideBar = () => {
    const routes = [
        {
            name: 'All User',
            link: '/dashboard'
        },
        {
            name: 'All Bus',
            link: '/dashboard/allbus'
        },
        {
            name: 'Add New Bus',
            link: '/dashboard/addbus'
        },
    ]
    return (
      <div>
        <Drawer
          variant="permanent"
          sx={{
            width: {
              sx: "100%",
              md: "100%",
              lg: 240,
            },
            height:{
              lg:'100%',
              md: '40%',
              sm: '40%',
            },
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: {
                sx: "100%",
                md: "100%",
                lg: 240,
              },
              boxSizing: "border-box",
            },
            position: "absolute",
            top: "500px",
            zIndex: -1,
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", position: "absolute", top: 100 }}>
            <List>
              {routes.map((route, i) => (
                <Link
                  key={i}
                  to={`${route.link}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {i === 0 ? <GroupIcon /> : <DirectionsBusIcon />}
                      </ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    );
};

export default SideBar;