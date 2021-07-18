import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { axiosAirTable } from '../../../public/Axios';
import Container from '../../../components/Container';
import Navbar from '../../../components/Navbar';
import styles from '../../../styles/PaintingId.module.scss';
import { Col, Row } from 'react-bootstrap';
import Header from '../../../components/Header';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import MainLayout from '../../../components/MainLayout';

function Painting({ painting, footerLinks }) {
  const { fields } = painting;
  console.log(painting);
  return (
    <MainLayout footerLinks={footerLinks}>
      <Container classnames="p-5">
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <Container classnames={styles.ImageContainer}>
              <Image
                placeholder="blur"
                blurDataURL={fields['Image Source Url']}
                layout="fill"
                objectFit="cover"
                src={fields['Image Source Url']}
                alt={fields['Image Alternative Name']}
              />
            </Container>
          </Col>
          <Col lg={6}>
            <Container classnames="d-flex flex-column align-items-center">
              <Container classnames="d-flex flex-column align-items-center mb-5">
                <Header fontSize={36}>{fields['Painting Name']}</Header>
                <Text>Painted in {fields['Painting Year']}</Text>
              </Container>
              <Container>
                <Text>{fields['Painting Description']}</Text>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container variant="center">
        <Button variant="primary" href="/portfolio">
          My Portfolio
        </Button>
      </Container>
    </MainLayout>
  );
}

Painting.propTypes = {
  painting: PropTypes.object,
};

export default Painting;

export async function getStaticPaths() {
  const paintings = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Paintings')
    .then((res) => res.data.records);

  const paths = paintings.map((painting) => ({
    params: { id: painting['id'] },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const painting = await axiosAirTable
    .get(`/appX2ycFLtWmCcHVb/Paintings/${id}`)
    .then((res) => res.data);

  const footerLinks = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Footer')
    .then((res) => res.data.records);

  return { props: { painting, footerLinks } };
}
