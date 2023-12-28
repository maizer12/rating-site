import { ReactChild } from 'react';

export interface ButtonProps {
  variable: 'primary' | 'outline';
  children: ReactChild;
}
