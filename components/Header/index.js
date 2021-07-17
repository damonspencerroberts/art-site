import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

function Header({ children, fontSize = 20 }) {
  return (
    <div className={styles.Header} style={{ fontSize: fontSize }}>
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
};

export default Header;
