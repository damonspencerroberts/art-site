import React from 'react';
import cx from 'classnames'; 
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

function Container({ variant, classnames, children }) {
  const className = cx({
    [classnames]: !!classnames,
    [styles.Center]: variant === 'center',
  });
  return <div className={className}>{children}</div>;
}

Container.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
