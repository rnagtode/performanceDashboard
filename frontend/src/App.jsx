import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  Box,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Move useLocation and layout logic here
function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const pathTitles = {
      '/': 'Dashboard - PerfA',
      '/history': 'History - PerfA',
    };
    document.title = pathTitles[location.pathname] || 'PerfA';
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
          transition: 'margin 0.3s',
          width: sidebarOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: sidebarOpen ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar>
          {!sidebarOpen && (
            <IconButton color="inherit" edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
              <MenuIcon htmlColor="black" />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
            PerfA
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar open={sidebarOpen} onClose={toggleSidebar} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: 'margin 0.3s',
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
