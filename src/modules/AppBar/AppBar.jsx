import NavBarMenu from 'modules/AppBar/NavBarMenu/NavBar';
import Currency from 'modules/AppBar/Currency/Currency';
import Balance from 'modules/AppBar/Balance/Balance';
import { useMediaQuery } from 'react-responsive';
import NavBarMobile from './NavBarMobile/NavBarMobile';
import { useLocation } from 'react-router-dom';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const location = useLocation();
  const onCurrency = location.pathname === '/currency';
  const onDiagram = location.pathname === '/diagram';
  const isTabletMin = useMediaQuery({ minWidth: 768 });
  const isTabletMax = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.AppBar}>
      <div className={styles.wrapper}>
        {isTabletMin && <NavBarMenu />}
        {isTabletMax && <NavBarMobile />}
        {!onCurrency && !onDiagram && isTabletMax && <Balance />}
        {isTabletMin && <Balance />}
      </div>
      {isTabletMin && <Currency />}
    </div>
  );
};

export default AppBar;
