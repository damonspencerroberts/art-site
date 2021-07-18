import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import styles from './PhotoCard.module.scss';
import Button from '../Button';

function PhotoCard({ cardDetails, ...props }) {
  const { title, year, description, link } = cardDetails;
  return (
    <Container classnames={styles.Container} {...props}>
      <Container variant="center" classnames="flex-column">
        <Container classnames={styles.Title}>{title}</Container>
        <Container classnames={styles.Year}>{year}</Container>
      </Container>
      <Container classnames={styles.Desc}>{description.slice(0, 150)}...</Container>
      <Container classnames={styles.Btn}>
        <Button variant="secondary">See More</Button>
      </Container>
    </Container>
  );
}

PhotoCard.propTypes = {
  cardDetails: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default PhotoCard;
