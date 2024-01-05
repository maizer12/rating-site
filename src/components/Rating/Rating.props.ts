import { ReactNode } from 'react';

export interface RatingProps {
  value: number;
  setEdit?: (i: number) => void;
}
