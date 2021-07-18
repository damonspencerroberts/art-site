import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import PhotoCard from '../PhotoCard';
import { AnimateSharedLayout, motion } from 'framer-motion';
import styles from './PhotoGrid.module.scss';
import usePhotoGrid from '../../hooks/usePhotoGrid';

function PhotoGrid({ images }) {
  const { isOpen, handleIsOpen } = usePhotoGrid();

  const imageDisplay = (
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
                  onClick={() => handleIsOpen(i)}
                  className={styles.Image}
                />
              )}
            </motion.div>
            <motion.div layout>
              {isOpen == i && <PhotoCard cardDetails={e.card} onClick={() => handleIsOpen(null)} />}
            </motion.div>
          </Col>
        );
      })}
    </AnimateSharedLayout>
  );
  return <Row className="p-3">{imageDisplay}</Row>;
}

PhotoGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default PhotoGrid;
