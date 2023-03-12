import { memo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import { NavbarItemInterface } from '../../interfaces/navbar';

const classes = {
  iconButton: {
    color: 'secondary.main',
  },
};

const NavbarItem = ({ icon, href }: NavbarItemInterface) => (
  <Button
    component={Link}
    href={href}
  >
    <IconButton sx={classes.iconButton}>
      {icon}
    </IconButton>
  </Button>
);

export default memo(NavbarItem);
