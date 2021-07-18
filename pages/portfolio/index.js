import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Portfolio.module.scss';
import Header from '../../components/Header';
import Container from '../../components/Container';
import PhotoGrid from '../../components/PhotoGrid';
import demo from '../../public/Demo/demo';
import usePhotoGrid from '../../hooks/usePhotoGrid';

function Portfolio(props) {
  const { isOpen, handleIsOpen } = usePhotoGrid();

  const groupBy = (list, n) => {
    const res = [];
    if (list != null) {
      for (let i = 0, j = 0; i < list.length; i += 1) {
        if (i >= n && i % n === 0) j += 1;
        res[j] = res[j] || [];
        res[j].push(list[i]);
      }
    }
    return res;
  };

  return (
    <div className={styles.Portfolio}>
      <Navbar />
      <Container variant="center">
        <Header fontSize={36}>My Portfolio</Header>
      </Container>
      <Container>
        {groupBy(demo.paintings, 3).map((subArr, i) => {
          return <PhotoGrid key={i} images={subArr} isOpen={isOpen} handleIsOpen={handleIsOpen} />;
        })}
      </Container>
    </div>
  );
}

export default Portfolio;
