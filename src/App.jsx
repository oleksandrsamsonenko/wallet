import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import UserRoutes from 'UserRoutes';
import { store, persistor } from './redux/store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <UserRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};
