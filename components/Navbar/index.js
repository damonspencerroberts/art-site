import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from '../Header';
import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Link href="/">
          <a>
            <Header classnames={styles.Navlinks}  fontSize={36}>Clive Roberts</Header>
          </a>
        </Link>
      </div>
      <div className={styles.Links}>
        <Link href="/">
          <a>
            <Header classnames={styles.Navlinks} >Home</Header>
          </a>
        </Link>
        <Link href="/portfolio">
          <a>
            <Header classnames={styles.Navlinks} >Artwork</Header>
          </a>
        </Link>
        <Link href="/commisions">
          <a>
            <Header classnames={styles.Navlinks} >Commisions</Header>
          </a>
        </Link>
        <Link href="/exhibitions">
          <a>
            <Header classnames={styles.Navlinks} >Exhibitions</Header>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Header classnames={styles.Navlinks} >About</Header>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Header classnames={styles.Navlinks} >Contact</Header>
          </a>
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
