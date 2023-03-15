import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import UserRoutes from 'UserRoutes';
import { store, persistor } from './redux/store';
import NavBar from 'modules/NavBar/NavBar';
import Balance from 'modules/Balance/Balance';
import Currency from 'modules/Currency/Currency';
import AppBar from 'modules/AppBar/AppBar';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit_react_project">
            {/* <NavBar />
            <Balance />
            <Currency /> */}
            <AppBar />
            <UserRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
