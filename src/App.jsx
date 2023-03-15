import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Statistic from 'modules/Statistic/Statistic';

import UserRoutes from 'UserRoutes';
import { store, persistor } from './redux/store';

import Header from 'shared/components/Header/Header';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit_react_project">
            <Header />
            <UserRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
