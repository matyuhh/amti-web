import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const classes = {
  container: {
    padding: '48px 20px',
    textAlign: 'center',
  },
};

const description = 'Fullstack developer with more than 2 years of experience building and maintaining scalable and innovative applications. Able to develop clean architectures, optimized to improve code performance. Expert in technologies such as Typescript, JavaScript, .NET, NodeJS, Reactjs/Redux and MongoDB; as well as in DevOps and Azure.';

const AboutMe = () => (
  <Box sx={classes.container}>
    <Typography variant="h1">
      Hi! I&apos;m Matías. Fullstack Developer.
    </Typography>

    <Typography variant="h3" mt={2}>
      {description}
    </Typography>
  </Box>
);

export default memo(AboutMe);
