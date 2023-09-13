import axios from 'axios';
import constants from '../constants.js';

async function fetchData(url) {
  try {
    const response = await axios.get(`${constants.API_URL}${url}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
}

export default fetchData;
