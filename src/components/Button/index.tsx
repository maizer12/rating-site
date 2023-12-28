import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.css';

export const Button: FC<ButtonProps> = ({ variable, children }): JSX.Element => {
  return (
    <button
      className={cn(style.button, { [style.primary]: variable == 'primary', [style.outline]: variable == 'outline' })}
    >
      {children}
    </button>
  );
};
