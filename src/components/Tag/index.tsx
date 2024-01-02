import style from './Tag.module.css';
import { TagProps } from './Tag.props';
import { FC } from 'react';
import cn from 'classnames';

export const Tag: FC<TagProps> = ({ children, variant, path = false }) => {
  const className = cn(style.tag, style[variant]);

  return <div className={className}>{path ? <a href={path}>{children}</a> : children}</div>;
};
