import NavBarMenu from 'modules/AppBar/NavBarMenu/NavBar';
import Currency from 'modules/AppBar/Currency/Currency';
import Balance from 'modules/AppBar/Balance/Balance';
import { useMediaQuery } from 'react-responsive';
import NavBarMobile from './NavBarMobile/NavBarMobile';
import styles from './AppBar.module.scss';

const AppBar = () => {
//   const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTabletMin = useMediaQuery({ minWidth: 768 });
  const isTabletMax = useMediaQuery({ maxWidth: 767 });
//   const isMobileMin = useMediaQuery({ maxWidth: 480 });
//   const isMobileMax = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.AppBar}>
      <div className={styles.wrapper}>
        {isTabletMin && <NavBarMenu />}
        {isTabletMax && <NavBarMobile />}
        <Balance />
      </div>
      {isTabletMin && <Currency />}
    </div>
  );
};

export default AppBar;
