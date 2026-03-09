import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://asia-northeast1-praha-test.cloudfunctions.net',
});
