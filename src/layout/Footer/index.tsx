import { FC } from 'react';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import { PTag } from '@/components';
import cn from 'classnames';
import style from './Footer.module.css';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer {...props} className={cn(className, style.footer)}>
      <PTag size="md">OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</PTag>
      <PTag size="md">Пользовательское соглашение</PTag>
      <PTag size="md">Политика конфиденциальности</PTag>
    </footer>
  );
};
