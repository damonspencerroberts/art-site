import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';

function Banner({ children }) {
  return <div className={styles.Banner}>{children}</div>;
}

Banner.propTypes = {
  children: PropTypes.node,
};

export default Banner;
