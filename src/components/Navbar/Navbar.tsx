import { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

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
    justifyContent: 'space-between',
    px: 3.5,
  },
  itemsContainer: {
    maxWidth: '240px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  darkModeSwitch: { color: 'secondary.main' },
};

const navbarItems: NavbarItemInterface[] = [
  { icon: (<GitHubIcon />), href: 'https://github.com/matyuhh' },
  { icon: (<LinkedInIcon />), href: 'https://www.linkedin.com/in/mat%C3%ADas-valent%C3%ADn-guti%C3%A9rrez-315726124/' },
];

const Navbar = () => (
  <AppBar position="static" sx={classes.appBar}>
    <Box sx={classes.container}>
      <Toolbar sx={classes.toolbar}>

        <Box display={{ xs: 'none', sm: 'block' }} />

        <Box sx={classes.itemsContainer}>
          {navbarItems.map(({ icon, href }) => <NavbarItem icon={icon} href={href} />)}
        </Box>

        <Box>
          <IconButton sx={classes.darkModeSwitch}>
            <DarkModeIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </Box>
  </AppBar>
);

export default memo(Navbar);
