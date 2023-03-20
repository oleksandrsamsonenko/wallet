import Login from 'modules/Auth/Login/Login';
import { useState } from 'react';
import { Transition } from 'shared/components/Transition/Transition';
import { Notifications } from 'shared/components/Notifications/Notifications';

const LoginPage = () => {
  const [showIt, setShowIt] = useState(false);
  return (
    <>
      <Transition type="opacity" showIt={showIt} setShowIt={setShowIt}>
        <Login />
      </Transition>
      <Notifications />
    </>
  );
};
export default LoginPage;
