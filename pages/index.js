import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import cx from 'classnames';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Text from '../components/Text';
import { light2, site } from '../styles/js-colors';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Container from '../components/Container';
import Button from '../components/Button';
import { axiosAirTable } from '../public/Axios';
import PhotoGrid from '../components/PhotoGrid';
import usePhotoGrid from '../hooks/usePhotoGrid';
import Footer from '../components/Footer';
import MainLayout from '../components/MainLayout';

export default function Home({ paintings, homePageConfig, footerLinks }) {
  console.log(footerLinks);
  const { fields } = homePageConfig;
  const { isOpen, handleIsOpen } = usePhotoGrid();
  const colorText = fields['Text Color'] === 'dark' ? site : light2;
  let placementText = styles.Center;
  if (fields['Text Placement'] !== 'Center') {
    placementText = fields['Text Placement'] === 'right' ? styles.Right : styles.Left;
  }
  // background-image: url('https://images.unsplash.com/photo-1563784269116-ff83fae17724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80');
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   background-size: cover;
  const bannerStyles = {
    backgroundImage: `url('${fields['Home Image Link']}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'grayscale(0.5)',
  };

  return (
    <MainLayout footerLinks={footerLinks}>
      <Head>
        <title>Clive Roberts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner style={bannerStyles}>
        <Container classnames={cx(styles.BannerContainer, placementText)}>
          <Text color={colorText} fontSize={28} classnames={styles.BannerText}>
            {fields['Description']}
          </Text>
          <Button classnames={styles.BannerButton} href="/about">
            Learn More
          </Button>
        </Container>
      </Banner>
      <Container variant="center">
        <Header fontSize={36}>Featured Work</Header>
      </Container>
      <Container style={{ padding: '20px 10px' }}>
        <PhotoGrid images={paintings.slice(0, 3)} isOpen={isOpen} handleIsOpen={handleIsOpen} />
      </Container>
      <Container variant="center">
        <Button variant="primary" href="/portfolio">
          My Portfolio
        </Button>
      </Container>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const paintings = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Paintings')
    .then((res) => res.data.records);

  const footerLinks = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Footer')
    .then((res) => res.data.records);

  const homePageConfig = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/HomePage/recCZFdkzNBUyVbX7')
    .then((res) => res.data);

  console.log(homePageConfig);

  return {
    props: {
      paintings,
      homePageConfig,
      footerLinks,
    },
  };
}
