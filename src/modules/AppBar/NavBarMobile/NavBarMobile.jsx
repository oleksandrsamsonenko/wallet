import { NavLink } from 'react-router-dom';
import styles from './NavBarMobile.module.scss';
import home from '../../../assets/svg/home.svg';
import diagrama from '../../../assets/svg/diagrama.svg';
import currency from '../../../assets/svg/currency.svg';

const NavBarMobile = () => {
  return (
    <ul className={styles.list}>
      <div className={styles.linkWrapper}>
        <li className={styles.link}>
          <NavLink to="/home">
            <img src={home} alt="home" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/diagram">
            <img src={diagrama} alt="diagramma" className={styles.img} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/diagram">
            <img src={currency} alt="currency" className={styles.img} />
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default NavBarMobile;
