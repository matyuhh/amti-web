import { memo, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import { ExperienceListItemInterface } from '../../interfaces/experience';
import colors from '../../core-ui/colors';

const classes = {
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 0px',
  },
  experienceButton: {
    minWidth: '320px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '8px 0px',
    flexDirection: { xs: 'column', sm: 'row' },
  },
  leftExperienceButtonData: {
    display: 'flex',
    alignItems: 'center',
  },
  companyRole: {
    ml: 1,
    border: `1px solid ${colors.black}`,
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
      <ListItem sx={classes.listItem}>

        <ListItemButton onClick={handleClick} sx={classes.experienceButton}>
          <Box sx={classes.leftExperienceButtonData}>
            <Typography variant="h3" color={open ? 'error.main' : ''}>
              {company}
            </Typography>
            <Box sx={classes.companyRole}>
              <Typography variant="h5">
                {companyRole}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">
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
