import React from 'react';
import Header from './components/Navbar';
import Footer from './components/Footer';
import withStyle from './withStyle';

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default withStyle(Layout);
