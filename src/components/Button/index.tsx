import { FC } from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.css';
import Icon from './icon.svg';

export const Button: FC<ButtonProps> = ({ variable, children, className, arrow = '', ...props }): JSX.Element => {
  return (
    <button
      className={cn(style.button, {
        [style.primary]: variable == 'primary',
        className,
        [style.outline]: variable == 'outline',
      })}
      {...props}
    >
      {children}
      {arrow && (
        <div className="arrow">
          <Icon />
        </div>
      )}
    </button>
  );
};
