import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import styles from './Footer.module.scss';

function Footer({ links }) {
  const mappedLinks = links.map((link, i) => {
    const { fields } = link;
    return (
      <a key={i} href={fields['Link Url']} className={styles.Link} target="_blank" rel="noreferrer">
        {fields['Link Text']}
      </a>
    );
  });
  return (
    <Container classnames="p-3 pt-5 d-flex align-items-center justify-content-center flex-column">
      <Container classnames="d-flex align-items-center justify-content-between mb-4">
        {mappedLinks}
      </Container>
      <Container classnames={styles.Copy}>DRS Damon Roberts Site Creation ©</Container>
    </Container>
  );
}

Footer.propTypes = {};

export default Footer;
