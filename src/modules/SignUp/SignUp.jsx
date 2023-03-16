import fields from 'fields';
import FormField from 'shared/components/FormField/FormField';
import Button from 'shared/components/Button/Button';
import { Link } from 'react-router-dom';
import css from './SignUp.module.scss';
import userSvg from '../../assets/svg/user.svg';
import emailSvg from '../../assets/svg/email.svg';
import passwordSvg from '../../assets/svg/password.svg';
const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
const SignUp = () => {
  const { name, email, password } = INITIAL_STATE;
  return (
    <div className="container">
      <form className={css.form}>
        <div className={css.field}>
          <div className={css.wrapper}>
            <img src={emailSvg} alt="user-email" className={css.svg} />
          </div>
          <FormField value={email} {...fields.email} />
        </div>
        <div className={css.field}>
          <div className={css.wrapper}>
            <img src={passwordSvg} alt="user-password" className={css.svg} />
          </div>
          <FormField value={password} {...fields.password} />
        </div>

        <div className={css.field}>
          <div className={css.wrapper}>
            <img src={passwordSvg} alt="user-password" className={css.svg} />
          </div>
          <FormField value={password} {...fields.passwordConfirm} />
        </div>
        <div className={css.field}>
          <div className={css.wrapper}>
            <img src={userSvg} alt="user-name" className={css.svg} />
          </div>
          <FormField value={name} {...fields.name} />
        </div>

        <Button text="Sign Up" type="submit" styleName="btn-auth" />
        <Link to="/auth" className={css.btnAuth}>
          Log in
        </Link>
      </form>
    </div>
  );
};
export default SignUp;
