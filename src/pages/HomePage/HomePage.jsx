import { Outlet } from 'react-router';

import AppBar from 'modules/AppBar/AppBar';
import { TempPage } from 'shared/components/TempPage/TempPage';

function HomePage() {
  return (
    <>
      <AppBar />
      <TempPage />
      <Outlet />
    </>
  );
}

export default HomePage;
