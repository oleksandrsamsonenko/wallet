import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { SpinnerClock } from 'shared/components/Spinner/Spinner';
import fetchCurrency from 'shared/api/currency';
import styles from './Currency.module.scss';
import backgroundDesc from '../../../assets/background/currency-table.png';
import backgrounTab from '../../../assets/background/bg-tab-curr.png';
import getDataFromLocalStorage from 'shared/utils/localStorage';

const INITIAL_STATE = {
  currency: [],
  loader: false,
  moreThanHour: false,
  error: false,
};
const currencyFromStorage = getDataFromLocalStorage('currency', []);
const prevDate = getDataFromLocalStorage('currencyFetchDate');
const moreThanHour = Date.now() - prevDate > 360000;

const Currency = () => {
  const [currency, setCurrency] = useState(currencyFromStorage);
  const [loader, setLoader] = useState(INITIAL_STATE.loader);
  const [isError, setIsError] = useState(INITIAL_STATE.error);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        if (currencyFromStorage.length > 0 && !moreThanHour) {
          return;
        }
        setLoader(true);
        const { data } = await fetchCurrency();
        setLoader(false);
        setCurrency(data);
        localStorage.setItem('currency', JSON.stringify(data));
        localStorage.setItem('currencyFetchDate', JSON.stringify(Date.now()));
      } catch ({ message }) {
        setIsError(true);
        setLoader(false);
      }
    };
    getCurrency();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  if (currency.length === 0) {
    return;
  }

  const usd = currency.find(
    ({ currencyCodeA, currencyCodeB }) =>
      currencyCodeA === 840 && currencyCodeB === 980
  );

  const eur = currency.find(
    ({ currencyCodeA, currencyCodeB }) =>
      currencyCodeA === 978 && currencyCodeB === 980
  );

  const bg = isTabletOrMobile
    ? `url("${backgrounTab}")`
    : `url("${backgroundDesc}")`;
  return (
    <div className={styles.currency} style={{ backgroundImage: bg }}>
      {loader && <SpinnerClock />}
      {isError && (
        <p className={styles.error}>
          Exchange rate information is not available at the moment, please try
          again later.
        </p>
      )}
      {!loader && !isError && (
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
              <td className={styles.td}>{Number(usd.rateBuy).toFixed(2)}</td>
              <td className={styles.td}>{Number(usd.rateSell).toFixed(2)}</td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>EUR</td>
              <td className={styles.td}>{Number(eur.rateBuy).toFixed(2)}</td>
              <td className={styles.td}>{Number(eur.rateSell).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Currency;
