import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../components/MainLayout';
import { axiosAirTable } from '../../public/Axios';

function Contact({ footerLinks }) {
  return <MainLayout footerLinks={footerLinks}>Contact</MainLayout>;
}

Contact.propTypes = {};

export default Contact;

export async function getServerSideProps(context) {
  const footerLinks = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Footer')
    .then((res) => res.data.records);

  return {
    props: {
      footerLinks,
    },
  };
}
