import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../components/MainLayout';
import { axiosAirTable } from '../../public/Axios';
import Container from '../../components/Container';
import { grey } from '../../styles/js-colors';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/Input/TextArea';

function Commisions({ paintings, footerLinks }) {
  return (
    <MainLayout footerLinks={footerLinks}>
      <Container variant="center" classnames="flex-column">
        <Header fontSize={40}>request a commisi</Header>
        <Text color={grey}>This is the sub text</Text>
        <Container variant="center" classnames="flex-column">
          <Text fontSize={16}>fdaskakjdsfjadsjfdas</Text>
          <Text fontSize={16}>fdaskakjdsfjadsjfdas</Text>
          <Text fontSize={16}>fdaskakjdsfjadsjfdas</Text>
        </Container>
      </Container>
      <Container variant="center">
        <Text>Please add your request below:</Text>
      </Container>
      <Container>
        <form className="d-flex align-items-center flex-column">
          <Input type="text" placeholder="Your Name" classnames="m-2" />
          <Input type="email" placeholder="Your Email" classnames="m-2" />
          <TextArea placeholder="What you would like?" classnames="m-2" />
          <Input type="submit" value="Submit" classnames="m-2" isButton />
        </form>
      </Container>
    </MainLayout>
  );
}

Commisions.propTypes = {};

export default Commisions;

export async function getServerSideProps(context) {
  const paintings = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Paintings')
    .then((res) => res.data.records);

  const footerLinks = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Footer')
    .then((res) => res.data.records);

  return {
    props: {
      paintings,
      footerLinks,
    },
  };
}
