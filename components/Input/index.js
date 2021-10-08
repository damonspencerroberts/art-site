import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Input.module.scss';

function Input({ classnames, isButton = false, register = () => {}, namespace, ...props }) {
  const className = cx({
    [styles.Input]: !isButton,
    [classnames]: !!classnames,
    [styles.Button]: isButton,
  });
  return <input className={className} {...props} {...register(namespace)} />;
}

Input.propTypes = {
  classnames: PropTypes.string,
  isButton: PropTypes.bool,
  register: PropTypes.func,
  namespace: PropTypes.string,
};

export default Input;
