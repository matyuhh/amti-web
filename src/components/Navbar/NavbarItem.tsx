import { memo } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { NavbarItemInterface } from '../../interfaces/navbar';

const classes = {
  navbarItem: {
    color: 'secondary.main',
    padding: 0,
    textTransform: 'none',
  },
};

const NavbarItem = ({ text }: NavbarItemInterface) => (
  <Typography
    variant="h5"
    component={Button}
    sx={classes.navbarItem}
  >
    {text}
  </Typography>
);

export default memo(NavbarItem);
