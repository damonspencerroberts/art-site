import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from '../Header';
import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Header fontSize={36}>Clive Roberts</Header>
      </div>
      <div className={styles.Links}>
        <Link href="/portfolio">
          <a>
            <Header>Portfolio</Header>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Header>About</Header>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Header>Header</Header>
          </a>
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
