import { memo } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExperienceListItem from './ExperienceListItem';
import { ExperienceListItemInterface } from '../../interfaces/experience';

const companiesExperience: ExperienceListItemInterface[] = [
  {
    company: 'Tupaca',
    companyRole: 'Fullstack Developer',
    from: 'NOV 2021',
    to: 'PRESENT',
    children: (
      <Box pt={1}>
        <Typography variant="h5">
          Web application development for systems of different types/industries.
        </Typography>
        <br />
        <Typography variant="h5">
          Stack Frontend:
        </Typography>
        <Typography variant="h5">
          + Typescript, Javascript.
        </Typography>
        <Typography variant="h5">
          + React, Redux, MaterialUI, NextJS, Gatsby.
        </Typography>
        <br />
        <Typography variant="h5">
          Stack Backend:
        </Typography>
        <Typography variant="h5">
          + MongoDB, Express, Node.js, NestJS, Typescript.
        </Typography>
        <Typography variant="h5">
          + SQL Server, .NET Web APIs, Microsoft Azure, Docker.
        </Typography>
      </Box>
    ),
  },
  {
    company: 'ICBC Argentina',
    companyRole: 'OPS IT',
    from: 'APR 2018',
    to: 'NOV 2021',
    children: (
      <Box pt={1}>
        <Typography variant="h5">
          + Linux, Unix, Windows, Openshift, AWS.
        </Typography>
        <Typography variant="h5">
          + Python for automation.
        </Typography>
        <Typography variant="h5">
          + Grafana, Naemon, Jira, Kibana, Elastic, Datadog, Docker, Gitlab.
        </Typography>
      </Box>
    ),
  },
];

const Experience = () => (
  <List aria-labelledby="nested-list-subheader">
    {companiesExperience.map(({
      company, companyRole, from, to, children,
    }) => (
      <ExperienceListItem
        company={company}
        companyRole={companyRole}
        from={from}
        to={to}
        key={`${company}-${companyRole}`}
      >
        {children}
      </ExperienceListItem>
    ))}
  </List>
);

export default memo(Experience);
