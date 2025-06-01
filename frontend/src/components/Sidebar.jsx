import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import { ListItemIcon } from '@mui/material';


function Sidebar({ open, onClose, drawerWidth }) {
  const menuItems = [
    { text: 'Dashboard', path: '/', icon: <DashboardIcon sx={{ color: 'black' }} /> },
    { text: 'History', path: '/history', icon: <HistoryIcon sx={{ color: 'black' }} /> },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f3eeee',
          color: 'white',
        },
      }}
    >
      {/* Replace CloseIcon with MenuIcon */}
      <Toolbar sx={{ justifyContent: 'space-between', px: 2}}>
         <img
            src="/Cisco-logo.ico"
            alt="Logo"
            style={{ height: 32, width: 32, objectFit: 'contain' }}
          />
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <MenuIcon htmlColor='black'/>
        </IconButton>
      </Toolbar>

      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map(({ text, path, icon}) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={path}
              sx={{
                borderRadius: 2, // rounded corners
                '&:hover': {
                  backgroundColor: '#ddd', // light hover effect
                },
                '&.Mui-focusVisible': {
                  outline: '2px solid #1976d2', // optional: visible focus ring
                }
      }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: '1rem',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
