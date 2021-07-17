import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from '../Header';
import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Header content="Clive Roberts" fontSize={36} />
      </div>
      <div className={styles.Links}>
        <Link href="/portfolio">
          <a>
            <Header content="Portfolio" />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Header content="About" />
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Header content="Contact" />
          </a>
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
