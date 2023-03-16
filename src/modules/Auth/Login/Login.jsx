import Button from 'shared/components/Button/Button';
import { Link } from 'react-router-dom';
import css from './Login.module.scss';
import emailSvg from 'assets/svg/email.svg';
import passwordSvg from 'assets/svg/password.svg';
import { useFormik } from 'formik';
const Login = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
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

      <Button text="Log in" type="submit" styleName="btn-auth" />

      <Link to="/sign-up" className={css.btnAuth}>
        Sign up
      </Link>
    </form>
  );
};
export default Login;