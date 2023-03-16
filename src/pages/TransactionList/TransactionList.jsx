import { NavLink } from 'react-router-dom';
import css from '../TransactionList/TransactionList.module.scss';
import svg from '../../assets/svg/edit-02.svg';

const TransactionList = () => {
  return (
    <div className={css.box}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td className={css.tdComment}>Gift for your wife</td>
            <td>300</td>
            <td>
              <NavLink>
                <img src={svg} alt="Edit" className={css.svg} />
              </NavLink>
              <button className={css.btn}>Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody className={css.tbody}>
          <tr>
            <td>04.01.19</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td>300</td>
            <td>
              <NavLink>
                <img src={svg} alt="Edit" className={css.svg} />
              </NavLink>
              <button className={css.btn}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
