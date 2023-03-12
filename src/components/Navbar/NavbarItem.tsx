import { memo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import { NavbarItemInterface } from '../../interfaces/navbar';

const NavbarItem = ({ icon, href }: NavbarItemInterface) => (
  <Button
    component={Link}
    href={href}
  >
    <IconButton color="secondary">
      {icon}
    </IconButton>
  </Button>
);

export default memo(NavbarItem);
