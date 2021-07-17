import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Portfolio.module.scss';

function Portfolio(props) {
  return <div className={styles.Portfolio}><Navbar /></div>;
}

Portfolio.propTypes = {};

export default Portfolio;
