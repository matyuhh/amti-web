import { ReactNode } from 'react';

export interface ExperienceListItemInterface {
  company: string;
  companyRole: string;
  from: string;
  to: string;
  children: ReactNode;
}
