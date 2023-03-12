import { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NavbarItem from './NavbarItem';
import { NavbarItemInterface } from '../../interfaces/navbar';

const classes = {
  appBar: { width: '100%' },
  container: { width: '100%' },
  toolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    px: 3.5,
  },
  itemsContainer: {
    maxWidth: '320px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
};

const navbarItems: NavbarItemInterface[] = [
  { text: 'Sobre mí' },
  { text: 'Experiencia' },
  { text: 'Contacto' },
];

const Navbar = () => (
  <AppBar position="static" sx={classes.appBar}>
    <Box sx={classes.container}>
      <Toolbar sx={classes.toolbar}>

        <Box sx={classes.itemsContainer}>
          {navbarItems.map(({ text }) => <NavbarItem text={text} />)}
        </Box>

      </Toolbar>
    </Box>
  </AppBar>
);

export default memo(Navbar);
