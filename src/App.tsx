import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from './components/Navbar/Navbar';

const classes = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    bg: 'background.paper',
    flexDirection: 'column',
  },
};

const App = () => (
  <Box className="App" sx={classes.app}>
    <Navbar />
    <Typography variant="h1">
      REVAMP SPA
    </Typography>
  </Box>
);

export default memo(App);
