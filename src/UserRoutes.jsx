import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';
import SignUpPage from 'pages/AuthPages/SignUpPage/SignUpPage';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';

// Временно ненужное:
import HomePage from 'pages/HomePage/HomePage';
import Transaction from 'pages/TransactionList/Transaction/Transactions';
import Statistic from 'modules/Statistic/Statistic';
import Auth from 'modules/Auth/Auth';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Transaction />} />
        <Route path="/diagram" element={<Statistic />} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Auth />}>
          <Route index element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default UserRoutes;
