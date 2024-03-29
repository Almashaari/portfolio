/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Footer } from '../component/molecules/Footer';
import { Header } from '../component/molecules/Header';
export const Layout = ({ children }) => {

  return (
    <div className="bg-light-mode dark:bg-dark-mode transition duration-500">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

Layout.defaultProps = {
  children: PropTypes.array,
};
