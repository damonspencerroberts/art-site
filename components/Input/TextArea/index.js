import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../Input.module.scss';

function TextArea({ classnames, ...props }) {
  return <textarea className={cx(styles.Input, classnames)} style={{ height: 100 }} {...props} />;
}

TextArea.propTypes = {};

export default TextArea;
