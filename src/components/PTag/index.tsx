import { FC } from 'react';
import { PTagProps } from './PTag.props';
import cn from 'classnames';
import style from './PTag.module.css';

export const PTag: FC<PTagProps> = ({ children, size = 'lg' }): JSX.Element => {
  return (
    <p
      className={cn(style.text, {
        [style.sm]: size == 'sm',
        [style.md]: size == 'md',
      })}
    >
      {children}
    </p>
  );
};
