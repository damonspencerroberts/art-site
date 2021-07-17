import React from 'react';
import cx from 'classnames'; 
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

function Container({ variant, classnames, children, ...props }) {
  const className = cx({
    [classnames]: !!classnames,
    [styles.Center]: variant === 'center',
  });
  return <div className={className} {...props}>{children}</div>;
}

Container.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
