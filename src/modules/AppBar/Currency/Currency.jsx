import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { SpinnerClock } from 'shared/components/Spinner/Spinner';
import fetchCurrency from 'shared/api/currency';
import styles from './Currency.module.scss';
import backgroundDesc from '../../../assets/background/currency-table.png';
import backgrounTab from '../../../assets/background/bg-tab-curr.png';
import getDataFromLocalStorage from 'shared/utils/localStorage';

const INITIAL_STATE = { currency: [], loader: false };

const Currency = () => {
  const [currency, setCurrency] = useState(INITIAL_STATE.currency);
  const [loader, setLoader] = useState('');
  // const [moreThanHour, setMoreThanHour] = useState(INITIAL_STATE.loader);
  // const currencyFromStorage = getDataFromLocalStorage('currency', []);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        // if (currencyFromStorage.length > 0) {
        //   const prevDate = getDataFromLocalStorage('currencyFetchDate');
        //   setMoreThanHour(Date.now() - prevDate > 36000);
        // }

        // if (currencyFromStorage.length > 0 && !moreThanHour) {
        //   setCurrency(currencyFromStorage);
        //   return;
        // }

        setLoader(true);
        const { data } = await fetchCurrency();
        console.log('fetch done -->');

        setLoader(false);
        console.log(' loader afterfetch-->', loader);

        setCurrency(data);
        console.log('after fetch -->', loader);
        // localStorage.setItem('currency', JSON.stringify(data));
        // localStorage.setItem('currencyFetchDate', JSON.stringify(Date.now()));
      } catch ({ message }) {
        console.log(message);
        setLoader(false);
      }
    };
    getCurrency();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  if (currency.length === 0) {
    return;
  }

  const usd = currency.find(({ ccy }) => ccy === 'USD');
  const eur = currency.find(({ ccy }) => ccy === 'EUR');

  const bg = isTabletOrMobile
    ? `url("${backgrounTab}")`
    : `url("${backgroundDesc}")`;
  return (
    <div className={styles.currency} style={{ backgroundImage: bg }}>
      {loader && <SpinnerClock />}
      {!loader && (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Currency</th>
              <th className={styles.th}>Purchase</th>
              <th className={styles.th}> Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.td}>USD</td>
              <td className={styles.td}>{Number(usd.buy).toFixed(2)}</td>
              <td className={styles.td}>{Number(usd.sale).toFixed(2)}</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>EUR</td>
              <td className={styles.td}>{Number(eur.buy).toFixed(2)}</td>
              <td className={styles.td}>{Number(eur.sale).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
