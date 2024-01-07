import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer';
import style from './Layout.module.css';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <Sidebar className={style.sidebar} />
      <main className={style.main}>{children}</main>
      <Footer className={style.footer} />
    </div>
  );
};
export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function (props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
