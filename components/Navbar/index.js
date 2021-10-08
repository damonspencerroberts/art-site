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
            <Header fontSize={36}>Clive Roberts</Header>
          </a>
        </Link>
      </div>
      <div className={styles.Links}>
        <Link href="/">
          <a>
            <Header>Home</Header>
          </a>
        </Link>
        <Link href="/portfolio">
          <a>
            <Header>Artwork</Header>
          </a>
        </Link>
        <Link href="/commisions">
          <a>
            <Header>Commisions</Header>
          </a>
        </Link>
        <Link href="/exhibitions">
          <a>
            <Header>Exhibitions</Header>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <Header>About</Header>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Header>Contact</Header>
          </a>
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
