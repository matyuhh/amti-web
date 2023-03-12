import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
  container: {
    padding: '48px 20px',
    textAlign: 'center',
  },
};

const AboutMe = () => (
  <Box sx={classes.container}>
    <Typography variant="h1">
      Hi! I&apos;m Matías. Fullstack Developer.
    </Typography>

    <Typography variant="h3" mt={2}>
      A fullstack Developer with a strong Infrastructure/Ops background. MERN, Python & .NET/SQL.
    </Typography>
  </Box>
);

export default memo(AboutMe);
