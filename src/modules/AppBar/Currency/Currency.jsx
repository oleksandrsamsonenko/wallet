import styles from './Currency.module.scss';
import backgroundDesc from '../../../assets/background/currency-table.png';
import backgrounTab from '../../../assets/background/bg-tab-curr.png';

import { useMediaQuery } from 'react-responsive';

const Currency = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  const bg = isTabletOrMobile
    ? `url("${backgrounTab}")`
    : `url("${backgroundDesc}")`;
  return (
    <div className={styles.currency} style={{ backgroundImage: bg }}>
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
            <td className={styles.td}> 27.55</td>
            <td className={styles.td}>27.65</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>EUR</td>
            <td className={styles.td}>30.00</td>
            <td className={styles.td}>30.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
