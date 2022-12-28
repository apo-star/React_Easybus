import React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;
const SideBar = () => {
    const routes = [
        {
            name: 'All User',
            link: '/dashboard'
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
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            position: 'absolute',
            top: '500px',
            zIndex: -1,
            }}
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto',position:'absolute', top: 100 }}>
          <List>
            {routes.map((route, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton to={`${route.link}`}>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
              
            ))}
          </List>
        </Box>
      </Drawer>
        </div>
    );
};

export default SideBar;