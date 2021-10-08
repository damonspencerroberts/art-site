import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Header.module.scss';

function Header({ children, classnames, fontSize = 20 }) {
  return (
    <div className={cx(styles.Header, classnames)} style={{ fontSize: fontSize }}>
      {children}
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
};

export default Header;
