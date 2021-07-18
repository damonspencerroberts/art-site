import axios from 'axios';

const axiosAirTable = axios.create({
  baseURL: 'https://api.airtable.com/v0',
  headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
});

export { axiosAirTable };
