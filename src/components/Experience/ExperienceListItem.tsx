import { memo, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import { ExperienceListItemInterface } from '../../interfaces/experience';

const classes = {
  experienceButton: {
    flexDirection: { xs: 'column', sm: 'row' },
  },
  leftExperienceButtonData: {
    display: 'flex',
    alignItems: 'center',
  },
  companyRole: {
    ml: 1,
    border: '1px solid',
    borderColor: 'primary.main',
    borderRadius: '15px',
    padding: '5px',
  },
  children: {
    width: '100%',
  },
};
const ExperienceListItem = ({
  company, companyRole, from, to, children,
}: ExperienceListItemInterface) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => setOpen(!open);

  return (
    <>
      <ListItem>

        <ListItemButton onClick={handleClick} sx={classes.experienceButton}>
          <Box sx={classes.leftExperienceButtonData}>
            <Typography variant="h4" color={open ? 'error.main' : ''} fontWeight={600}>
              {company}
            </Typography>
            <Box sx={classes.companyRole}>
              <Typography variant="h5" fontWeight={500}>
                {companyRole}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" fontWeight={600}>
              {`${from} - ${to}`}
            </Typography>
          </Box>

        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit sx={classes.children}>
          <List component="div">
            {children}
          </List>
        </Collapse>

      </ListItem>

      <Divider />
    </>
  );
};

export default memo(ExperienceListItem);
