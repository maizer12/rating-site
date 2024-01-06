import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import style from './Layout.module.scss';
import { Footer } from './Footer';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
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
