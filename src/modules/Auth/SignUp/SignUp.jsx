import Button from 'shared/components/Button/Button';
import { Link } from 'react-router-dom';
import css from './SignUp.module.scss';
import emailSvg from 'assets/svg/email.svg';
import passwordSvg from 'assets/svg/password.svg';
import user from 'assets/svg/user.svg';
import { useFormik } from 'formik';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      password: '',
      cofirmPassword: '',
      email: '',
    },
    //  onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));
    //  },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <label className={css.wrapper}>
        <img src={emailSvg} alt="user-email" className={css.svg} />

        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="E-mail"
          className={css.input}
        />
      </label>

      <label className={css.wrapper}>
        <img src={passwordSvg} alt="user-password" className={css.svg} />

        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          className={css.input}
        />
      </label>
      <label className={css.wrapper}>
        <img src={user} alt="confirm-password" className={css.svg} />

        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Confirm password"
          className={css.input}
        />
      </label>
      <label className={css.wrapper}>
        <img src={emailSvg} alt="user-name" className={css.svg} />

        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="First name"
          className={css.input}
        />
      </label>

      <Button text="Sign up" type="submit" styleName="btn-auth" />

      <Link to="/" className={css.btnAuth}>
        Log in
      </Link>
    </form>
  );
};
export default SignUp;
