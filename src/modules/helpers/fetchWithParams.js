import constants from '../constants.js';
import axios from 'axios';

async function fetchWithParams(url, params) {
  try {
    const response = await axios.get(`${constants.API_URL}${url}`, {
        params,
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
}

export default fetchWithParams;
