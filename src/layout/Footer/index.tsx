import { FC } from 'react';
import { FooterProps } from './Footer.props';
import style from './Footer.module.scss';

export const Footer: FC<FooterProps> = ({ ...props }) => {
  return <footer {...props}>footer</footer>;
};

