import React from 'react';
import Header from '../screens/header/Header';
import Footer from '../screens/footer/Footer';
import { IData } from '../../interface/barcode-interface';

const Layout = ({
  children,
  data,
  error,
  loading,
}: React.PropsWithChildren<IData>) => {
  return (
    <div className="layout">
      <Header data={data} error={error} loading={loading} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
