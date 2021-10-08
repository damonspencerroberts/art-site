import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../components/MainLayout';
import { axiosAirTable } from '../../public/Axios';

function Commisionts({ paintings, footerLinks }) {
  return <MainLayout footerLinks={footerLinks}>Commisionts</MainLayout>;
}

Commisionts.propTypes = {};

export default Commisionts;

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