import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import PhotoCard from '../PhotoCard';
import { AnimateSharedLayout, motion } from 'framer-motion';
import styles from './PhotoGrid.module.scss';
import usePhotoGrid from '../../hooks/usePhotoGrid';

function PhotoGrid({ images, isOpen, handleIsOpen }) {
  const imageDisplay = (
    <AnimateSharedLayout>
      {images.map((e, i) => {
        const { fields } = e;
        const card = {
          title: fields['Painting Name'],
          description: fields['Painting Description'],
          link: fields['Painting Page Link'],
          year: fields['Painting Year'],
        };
        return (
          <Col key={i} md={4} className="d-flex align-items-center justify-content-center">
            <motion.div layout>
              {isOpen !== e['id'] && (
                <Image
                  placeholder="blur"
                  blurDataURL={fields['Image Source Url']}
                  height={320}
                  width={360}
                  alt={fields['Image Alternative Name']}
                  src={fields['Image Source Url']}
                  onClick={() => handleIsOpen(e['id'])}
                  className={styles.Image}
                />
              )}
            </motion.div>
            <motion.div layout>
              {isOpen == e['id'] && (
                <PhotoCard cardDetails={card} onClick={() => handleIsOpen(null)} />
              )}
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
  isOpen: PropTypes.string,
  handleIsOpen: PropTypes.func,
};

export default PhotoGrid;
