/* eslint-disable max-len */
import { memo } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ExperienceListItem from './ExperienceListItem';
import { ExperienceListItemInterface } from '../../interfaces/experience';

const companiesExperience: ExperienceListItemInterface[] = [
  {
    company: 'Accenture',
    companyRole: 'Fullstack Developer',
    from: 'JUN 2023',
    to: 'PRESENT',
    children: (
      <Box pt={1}>
        <Typography variant="h5">
          - Development of web applications for the metallurgical industry with .NET and React.
        </Typography>
        <br />
        <Typography variant="h5">
          Stack: React, .NET, Microsoft SQL Server, Azure, PostgreSQL, Jest.
        </Typography>
      </Box>
    ),
  },
  {
    company: 'Tupaca',
    companyRole: 'Fullstack Developer',
    from: 'NOV 2021',
    to: 'JUN 2023',
    children: (
      <Box pt={1}>
        <Typography variant="h5">
          - Construction of SDM, with NextJS, integrated with AD, Oracle and MongoDB for a large international chain in the hotel industry, from start to finish, in a timely manner.
        </Typography>
        <Typography variant="h5">
          - Development and deployment in Azure, of a webapp for business management, made with .NET and React + Redux.
        </Typography>
        <Typography variant="h5">
          - Creation of unit tests, application of design/architecture patterns and good code practices.
        </Typography>
        <Typography variant="h5">
          - Carrying out and participating in the code reviews process, to ensure high quality code.
        </Typography>
        <Typography variant="h5">
          - Timely delivery of projects, being a developer involved in business knowledge.
        </Typography>
        <br />
        <Typography variant="h5">
          Stack: Typescript, React, Redux, NextJS, MongoDB, Express, Node.js, .NET, Microsoft SQL Server, Azure, Docker, Jest.
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
          - Improvement in monitoring dashboards for Bank applications, in Kibana, Grafana, Elastic, Datadog (among others).
        </Typography>
        <Typography variant="h5">
          - Automation of reports for monitoring in Python.
        </Typography>
        <Typography variant="h5">
          - Monitoring of incidents in production and development environments.
        </Typography>
        <br />
        <Typography variant="h5">
          Stack: Grafana, Naemon, Kibana, Elastic, Datadog, Docker, Gitlab, Openshift, AWS, Python.
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
