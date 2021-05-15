import { handleThrow } from './throw.utils';

const validateUsername = (username) => {
  if (username.length < 4) {
    handleThrow(
      'UsernameNotValidException',
      'UsernameNotValidException',
      'Username must be at least 4 character.'
    );
  }
};

const validatePassword = (password) => {
  if (password.length < 8) {
    handleThrow(
      'PasswordNotValidException',
      'PasswordNotValidException',
      'Password must be at least 8 character.'
    );
  }

  const lowercaseRegex = new RegExp('^(?=.*[a-z])');
  if (!lowercaseRegex.test(password)) {
    handleThrow(
      'PasswordNotValidException',
      'PasswordNotValidException',
      'Password must have lowercase characters'
    );
  }

  const uppercaseRegex = new RegExp('^(?=.*[A-Z])');
  if (!uppercaseRegex.test(password)) {
    handleThrow(
      'PasswordNotValidException',
      'PasswordNotValidException',
      'Password must have uppercase characters'
    );
  }

  const numericRegex = new RegExp('^(?=.*[0-9])');
  if (!numericRegex.test(password)) {
    handleThrow(
      'PasswordNotValidException',
      'PasswordNotValidException',
      'Password must have numeric characters'
    );
  }
};

export { validateUsername, validatePassword };
