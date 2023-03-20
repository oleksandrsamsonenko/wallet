import SignUp from 'modules/Auth/SignUp/SignUp';
import { useState } from 'react';
import { Transition } from 'shared/components/Transition/Transition';
import { Notifications } from 'shared/components/Notifications/Notifications';

const SignUpPage = () => {
  const [showIt, setShowIt] = useState(false);

  return (
    <>
      <Transition type="opacity" showIt={showIt} setShowIt={setShowIt}>
        <SignUp />
      </Transition>
      <Notifications />
    </>
  );
};
export default SignUpPage;
