import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './MainLayout.module.scss';

function MainLayout({ footerLinks, children }) {
  return (
    <Container classnames={styles.MainLayout}>
      <Navbar />
      {children}
      <Footer links={footerLinks} />
    </Container>
  );
}

MainLayout.propTypes = {
  footerLinks: PropTypes.array,
  children: PropTypes.node,
};

export default MainLayout;
