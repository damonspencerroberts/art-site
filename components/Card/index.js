import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Header from '../Header';
import Text from '../Text';
import Button from '../Button';
import styles from './Card.module.scss';

function Card({ header, text, buttonText, hasButton = false }) {
  return (
    <div className={cx(styles.Card, 'd-flex flex-column align-items-center p-3')}>
      <Header fontSize={24} classnames="p-2">{header}</Header>
      <Text classnames="p-2">{text}</Text>
      {hasButton && <Button variant="primary" classnames="m-2">{buttonText}</Button>}
    </div>
  );
}

Card.propTypes = {
  header: PropTypes.node,
  text: PropTypes.node,
  buttonText: PropTypes.node,
  hasButton: PropTypes.bool,
};

export default Card;
