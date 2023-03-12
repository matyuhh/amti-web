import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

import colors from '../../core-ui/colors';

const classes = {
  container: {
    padding: '48px 20px',
    textAlign: 'center',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  mailButton: {
    padding: '10px',
    borderRadius: '15px',
    border: `1px solid ${colors.black}`,
    background: colors.red,
    color: colors.white,
    ':hover': {
      color: colors.black,
    },
    mt: 2,
    textTransform: 'none',
  },
};

const Contact = () => (
  <Box sx={classes.container}>
    <Typography variant="h2">
      Do you have any idea in mind?
    </Typography>

    <Typography variant="h4" mt={1}>
      Let&apos;s make it happen...
    </Typography>

    <Box sx={classes.socialContainer}>
      <Button
        sx={classes.mailButton}
        component={Link}
        href="mailto:matyuh@hotmail.com"
      >
        matyuh@hotmail.com
      </Button>
    </Box>
  </Box>
);

export default memo(Contact);
