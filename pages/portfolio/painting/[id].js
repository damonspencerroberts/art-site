import React from 'react';
import PropTypes from 'prop-types';
import { axiosAirTable } from '../../../public/Axios';

function Painting({ painting }) {
  console.log(painting);
  return <div>Hello World!</div>;
}

Painting.propTypes = {};

export default Painting;

export async function getStaticPaths() {
  const paintings = await axiosAirTable
    .get('/appX2ycFLtWmCcHVb/Table%201')
    .then((res) => res.data.records);

  const paths = paintings.map((painting) => ({
    params: { id: painting['id'] },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const painting = await axiosAirTable
    .get(`/appX2ycFLtWmCcHVb/Table%201/${id}`)
    .then((res) => res.data);

  return { props: { painting } };
}
