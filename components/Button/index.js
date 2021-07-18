import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

function Button({ classnames, variant, children, ...props }) {
  const className = cx({
    [styles.Button]: true,
    [classnames]: !!classnames,
    [styles.Primary]: variant === 'primary',
    [styles.Secondary]: variant === 'secondary',
  });

  return <a role="button" className={className} {...props}>{children}</a>;
}

Button.propTypes = {
    classnames: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string
};

export default Button;
