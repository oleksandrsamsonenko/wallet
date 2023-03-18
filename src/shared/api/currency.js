import axios from 'axios';

const BASE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

async function fetchCurrency() {
  const response = await axios.get(BASE_URL);
  return response;
}

export default fetchCurrency;
