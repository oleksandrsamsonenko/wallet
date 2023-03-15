const fields = {
  name: {
    label: 'User name',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'First name',
  },
  email: {
    label: 'User email',
    name: 'email',
    type: 'email',
    required: true,
    placeholder: 'E-mail',
  },
  password: {
    label: 'User password',
    name: 'password',
    type: 'password',
    required: true,
    placeholder: 'Password',
  },
  passwordConfirm: {
    label: 'Confirm password',
    name: 'confirm',
    type: 'password',
    required: true,
    placeholder: 'Confirm password',
  },
};
export default fields;
