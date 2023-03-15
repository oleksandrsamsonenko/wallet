import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import home from '../../assets/svg/home.svg';
import diagrama from '../../assets/svg/diagrama.svg';

const NavBar = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.link}>
        <div className={styles.linkWrapper}>
          <img src={home} alt="home" className={styles.img} />
          <NavLink to="/">Home</NavLink>
        </div>
      </li>
      <li>
        <div className={styles.linkWrapper}>
          <img src={diagrama} alt="diagramma" className={styles.img} />
          <NavLink to="/statistics">Statistics</NavLink>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
