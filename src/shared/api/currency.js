import axios from 'axios';

const BASE_URL = 'https://api.monobank.ua/bank/currency';

async function fetchCurrency() {
  const response = await axios.get(BASE_URL);
  return response;
}

export default fetchCurrency;
