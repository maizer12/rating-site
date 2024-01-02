import { ReactNode } from 'react';

export interface TagProps {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'primary-outline' | 'success' | 'danger';
  path?: string | false;
}
