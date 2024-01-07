import style from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import { FC } from 'react';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return <aside {...props}>sidebar</aside>;
};
