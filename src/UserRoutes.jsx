import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';

// Временно ненужное:
import HomePage from 'pages/HomePage/HomePage';
import Transaction from 'pages/TransactionList/Transaction/Transactions';
import Statistic from 'modules/Statistic/Statistic';
import SignUp from 'modules/SignUp/SignUp';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/home" element={<Transaction />} />
        <Route path="/diagram" element={<Statistic />} />
      </Route>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default UserRoutes;
