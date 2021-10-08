import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../Input.module.scss';

function TextArea({ classnames, register = () => {}, namespace, ...props }) {
  return (
    <textarea
      className={cx(styles.Input, classnames)}
      style={{ height: 100 }}
      {...props}
      {...register(namespace)}
    />
  );
}

TextArea.propTypes = {
  register: PropTypes.func,
  namespace: PropTypes.string,
  classnames: PropTypes.string,
};

export default TextArea;
