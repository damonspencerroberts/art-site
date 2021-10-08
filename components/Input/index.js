import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Input.module.scss';

function Input({ classnames, isButton = false, ...props }) {
  const className = cx({
    [styles.Input]: !isButton,
    [classnames]: !!classnames,
    [styles.Button]: isButton,
  });
  return <input className={className} {...props} />;
}

Input.propTypes = {
  classnames: PropTypes.string,
  isButton: PropTypes.bool,
};

export default Input;
