import style from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { FC } from 'react';

export const Header: FC<HeaderProps> = ({ ...props }) => {
  return <header {...props}>header</header>;
};
