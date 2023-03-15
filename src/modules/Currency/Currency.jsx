import styles from './Currency.module.scss';
import background from '../../assets/background/currency-table.png';

const Currency = () => {
  return (
    <div
      className={styles.currency}
      style={{ backgroundImage: `url("${background}")` }}
    >
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
