/* eslint-disable no-useless-escape */
import Button from 'shared/components/Button/Button';
import { Link } from 'react-router-dom';
import css from './SignUp.module.scss';
import emailSvg from 'assets/svg/email.svg';
import passwordSvg from 'assets/svg/password.svg';
import userSvg from 'assets/svg/user.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/auth-operations';
import * as Yup from 'yup';

import logo from '../../../assets/svg/main-logo.svg';

const SignUp = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    password: '',
    confirmPassword: '',
    email: '',
  };
  const onSubmit = values => {
    if (values.password !== values.confirmPassword) {
      alert('passwords do not match');
      return;
    }
    const user = {
      password: values.password,
      username: values.firstName,
      email: values.email,
    };
    dispatch(register(user));
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('*incorrectly specified email')
      .required('*Email is required'),
    firstName: Yup.string().min(2).max(10).required('Name is required'),
    password: Yup.string()
      .required('*Password is required')
      .min(8, 'Your password must contain a least 8 characters'),
  });
  const getStyleValidator = value => {
    const perfectValidationString =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const firstValidationString = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    const secondValidationString =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const thirdValidationString =
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const quatroValidationString =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const normalPassword =
      firstValidationString.exec(value) ||
      secondValidationString.exec(value) ||
      thirdValidationString.exec(value) ||
      quatroValidationString.exec(value);
    const perfectPassword = perfectValidationString.exec(value);

    if (value.length < 8) {
      return 'empty';
    } else if (perfectPassword) {
      return 'perfect';
    } else if (normalPassword) {
      return 'normal';
    } else {
      return 'bad';
    }
  };
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
                  <Field name="password">
                    {({ field, form: { touched, errors }, meta }) => {
                      return (
                        <>
                          <input
                            type="password"
                            placeholder="Password"
                            {...field}
                            className={css.input}
                          />

                          <div className={css.indicate}>
                            <div
                              className={getStyleValidator(meta.value)}
                            ></div>
                          </div>

                          {meta.touched && meta.error && (
                            <div className="error"></div>
                          )}
                        </>
                      );
                    }}
                  </Field>
                </div>
                <FormError name="password" />
              </label>
              <label className={css.label}>
                <img
                  src={passwordSvg}
                  alt="confirm-password"
                  className={css.svg}
                />

                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className={css.input}
                ></Field>
                <FormError name="confirmPassword" />
              </label>
              <label className={css.label}>
                <img src={userSvg} alt="user-name" className={css.svg} />

                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className={css.input}
                ></Field>
                <FormError name="firstName" />
              </label>

              <Button text="Sign up" type="submit" styleName="btn-auth" />

              <Link to="/" className={css.btnAuth}>
                Log in
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignUp;
