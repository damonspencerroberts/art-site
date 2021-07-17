import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'; 
import { dark } from '../../styles/js-colors';
import styles from './Text.module.scss';

function Text({ children, classnames, color = dark, fontSize = 20 }) {
  return (
    <div className={cx(styles.Text, classnames)} style={{ color, fontSize }}>
      {children}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Text;
