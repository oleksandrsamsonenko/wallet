import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';
import SignUpPage from 'pages/AuthPages/SignUpPage/SignUpPage';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import Loader from 'shared/components/Loader/Loader';

const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Currency = lazy(() => import('modules/AppBar/Currency/Currency'));
const Auth = lazy(() => import('modules/Auth/Auth'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Statistic = lazy(() => import('modules/Statistic/Statistic'));
const Transaction = lazy(() =>
  import('pages/TransactionList/Transaction/Transactions')
);

function UserRoutes() {
  return (
    <Suspense fallback={Loader}>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />}>
            <Route path="home" element={<Transaction />} />
            <Route path="diagram" element={<Statistic />} />
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
    </Suspense>
  );
}

export default UserRoutes;
