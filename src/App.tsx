import { memo } from 'react';
import Box from '@mui/material/Box';

import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

const classes = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    bg: 'background.paper',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
};

const App = () => (
  <Box className="App" sx={classes.app}>
    <Navbar />
    <Box sx={classes.body}>
      <AboutMe />
      <Experience />
      <Contact />
    </Box>
  </Box>
);

export default memo(App);
