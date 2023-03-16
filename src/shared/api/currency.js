import axios from 'axios';

export async function fetchCurrency() {
  const response = axios.get(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  );

  return response;
}
