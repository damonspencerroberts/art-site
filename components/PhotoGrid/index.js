import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import demo from '../../public/Demo/demo';
import PhotoCard from '../PhotoCard';
import { AnimateSharedLayout, motion } from 'framer-motion';
import styles from './PhotoGrid.module.scss';

function PhotoGrid({ images = demo.slice(3) }) {
  const [isOpen, setIsOpen] = useState(null);

  const handleShowCard = (curIndex) => {
    setIsOpen(curIndex);
  };

  const imageDisplay = (
    <React.Fragment>
      <AnimateSharedLayout>
        {images.map((e, i) => {
          return (
            <Col key={i} md={4} className="d-flex align-items-center justify-content-center">
              <motion.div layout>
                {isOpen !== i && (
                  <Image
                    height={320}
                    width={360}
                    alt={e.alt}
                    src={e.src}
                    onClick={() => handleShowCard(i)}
                    className={styles.Image}
                  />
                )}
              </motion.div>
              <motion.div layout>
                {isOpen == i && (
                  <PhotoCard cardDetails={e.card} onClick={() => handleShowCard(null)} />
                )}
              </motion.div>
            </Col>
          );
        })}
      </AnimateSharedLayout>
    </React.Fragment>
  );
  return <Row>{imageDisplay}</Row>;
}

PhotoGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PhotoGrid;
