
import Button from 'shared/components/Button/Button';
import { Link } from 'react-router-dom';
import css from './Login.module.scss';
import emailSvg from 'assets/svg/email.svg';
import passwordSvg from 'assets/svg/password.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/Auth/auth-operations';
import * as Yup from 'yup';

import logo from '../../../assets/svg/main-logo.svg';

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    password: '',
    email: '',
  };
  const onSubmit = values => {
    const user = {
      password: values.password,
      email: values.email,
    };
    dispatch(login(user));
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('*incorrectly specified email')
      .required('*Email is required'),
    password: Yup.string().required('*Password is required'),
  });
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p className={css.error}>{message}</p>}
      />
    );
  };
  return (
    <>
      <div className={css.desktopWrapper}>
        <div className={css.imageBox}>
          <div className="girl__box"></div>
          <p className={css.backText}>Finance App</p>
        </div>
        <div className={css.backdrop}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className={css.form}>
              <div className={css.logoBox}>
                <img className={css.logo} src={logo} alt="logo" />
                <span className={css.logoText}> Wallet</span>
              </div>
              <label className={css.label}>
                <img src={emailSvg} alt="user-email" className={css.svg} />
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  className={css.input}
                ></Field>
                <FormError name="email" />
              </label>

              <label className={css.passwordLabel}>
                <div className={css.flexedPassword}>
                  <img
                    src={passwordSvg}
                    alt="user-password"
                    className={css.svg}
                  />
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={css.input}
                  ></Field>
                </div>
                <FormError name="password" />
              </label>
              <Button text="Log in" type="submit" styleName="btn-auth" />

              <Link to="/sign-up" className={css.btnAuth}>
                Sign up
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Login;
