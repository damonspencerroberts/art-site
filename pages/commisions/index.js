import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import MainLayout from '../../components/MainLayout';
import { axiosAirTable } from '../../public/Axios';
import Container from '../../components/Container';
import { grey } from '../../styles/js-colors';
import Text from '../../components/Text';
import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/Input/TextArea';

function Commisions({ commisions, footerLinks }) {
  const { register, handleSubmit } = useForm();
  const { fields } = commisions[0];

  const onSubmit = (d) => {
    console.log(d);
  };

  const {
    Header: header,
    SubHeader: subHeader,
    Text: text,
    Type1: type1,
    Type2: type2,
    Type3: type3,
  } = fields;

  return (
    <MainLayout footerLinks={footerLinks}>
      <Container variant="center" classnames="flex-column">
        <Header fontSize={42}>{header}</Header>
        <Text fontSize={16} color={grey}>
          {subHeader}
        </Text>
        <Container variant="center" classnames="flex-column">
          <Text fontSize={16}>{text}</Text>
          <Text fontSize={16}>{type1}</Text>
          <Text fontSize={16}>{type2}</Text>
          <Text fontSize={16}>{type3}</Text>
        </Container>
      </Container>
      <Container variant="center">
        <Text>Please add your request below:</Text>
      </Container>
      <Container>
        <form className="d-flex align-items-center flex-column" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Your Name"
            classnames="m-2"
            register={register}
            namespace="name"
          />
          <Input
            type="email"
            placeholder="Your Email"
            classnames="m-2"
            register={register}
            namespace="email"
          />
          <TextArea
            placeholder="What you would like?"
            classnames="m-2"
            register={register}
            namespace="request"
          />
          <Input type="submit" value="Submit" classnames="m-2" isButton />
        </form>
      </Container>
    </MainLayout>
  );
}

Commisions.propTypes = {};

export default Commisions;

export async function getServerSideProps(context) {
  const commisions = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Commisions')
    .then((res) => res.data.records);

  const footerLinks = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Footer')
    .then((res) => res.data.records);

  console.log(commisions);

  return {
    props: {
      commisions,
      footerLinks,
    },
  };
}
