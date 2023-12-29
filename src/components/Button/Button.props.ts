import { ButtonHTMLAttributes, DetailedHTMLProps, ReactChild } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variable: 'primary' | 'outline';
  children: ReactChild;
  arrow?: boolean;
}
