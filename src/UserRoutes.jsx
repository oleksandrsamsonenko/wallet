import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';
import SignUpPage from 'pages/AuthPages/SignUpPage/SignUpPage';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';

import NotFound from 'pages/NotFound/NotFound';

// Временно ненужное:
import HomePage from 'pages/HomePage/HomePage';
import Transaction from 'pages/TransactionList/Transaction/Transactions';
import Statistic from 'modules/Statistic/Statistic';
import Auth from 'modules/Auth/Auth';
import Currency from 'modules/AppBar/Currency/Currency';

function UserRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}>
          <Route path="home" element={<Transaction />} />
          <Route path="diagram" element={<Statistic />} />{' '}
          <Route path="currency" element={<Currency />} />
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UserRoutes;
