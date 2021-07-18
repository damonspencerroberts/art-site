import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Text from '../components/Text';
import { light2 } from '../styles/js-colors';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';
import { axiosAirTable } from '../public/Axios';
import { Col, Row } from 'react-bootstrap';
import demo from '../public/Demo/demo';
import PhotoGrid from '../components/PhotoGrid';
import usePhotoGrid from '../hooks/usePhotoGrid';

export default function Home({ paintings }) {
  const { isOpen, handleIsOpen } = usePhotoGrid();
  return (
    <div className={styles.Home}>
      <Head>
        <title>Clive Roberts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner>
        <Container classnames={styles.BannerContainer}>
          <Text color={light2} fontSize={28} classnames={styles.BannerText}>
            {demo.homepage.description}
          </Text>
          <Button classnames={styles.BannerButton}>Learn More</Button>
        </Container>
      </Banner>
      <Container variant="center">
        <Header fontSize={36}>Featured Work</Header>
      </Container>
      <Container style={{ padding: '20px 10px' }}>
        <PhotoGrid images={paintings.slice(0, 3)} isOpen={isOpen} handleIsOpen={handleIsOpen} />
      </Container>
      <Container variant="center">
        <Button variant="primary">See More</Button>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const paintings = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Table%201')
    .then((res) => res.data.records);

  return {
    props: {
      paintings,
    },
  };
}
