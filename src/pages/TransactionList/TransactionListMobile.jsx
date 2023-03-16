import { NavLink } from 'react-router-dom';
import css from '../TransactionList/TransactionListMobile.module.scss';
import svg from '../../assets/svg/edit-02.svg';

const TransactionListMobile = () => {
  return (
    <div className={css.box}>
      <table className={css.table}>
        <tbody className={css.tbody}>
          <tr className={css.part}>
            <td className={css.pointFirst}></td>
            <td className={css.head}>Date</td>
            <td className={css.body}>04.01.19</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Type</td>
            <td className={css.body}>-</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Category</td>
            <td className={css.body}>Other</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Comment</td>
            <td className={css.body}>Gift for your wife</td>
          </tr>
          <tr>
            <td className={css.point}></td>
            <td className={css.head}>Sum</td>
            <td className={css.body}>300</td>
          </tr>
          <tr>
            <td className={css.pointLast}></td>
            <td className={css.head}>
              <button className={css.btn}>Delete</button>
            </td>
            <td className={css.body}>
              <NavLink className={css.bodyLink}>
                <img src={svg} alt="Edit" className={css.svg} />
                <span> Edit</span>
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TransactionListMobile;
