import { NavLink } from 'react-router-dom';
import styles from './NavBarMenu.module.scss';
import home from '../../../assets/svg/home.svg';
import diagrama from '../../../assets/svg/diagrama.svg';

const NavBarMenu = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.link}>
        <div className={styles.linkWrapper}>
          <img src={home} alt="home" className={styles.img} />
          <NavLink to="/home">Home</NavLink>
        </div>
      </li>
      <li>
        <div className={styles.linkWrapper}>
          <img src={diagrama} alt="diagramma" className={styles.img} />
          <NavLink to="/diagram">Statistics</NavLink>
        </div>
      </li>
    </ul>
  );
};

export default NavBarMenu;
