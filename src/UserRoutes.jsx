import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';
import SignUpPage from 'pages/AuthPages/SignUpPage/SignUpPage';
import NavBar from 'modules/NavBar/NavBar';

function UserRoutes() {
  return (
    <Suspense fallback={<p>....Load page</p>}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
