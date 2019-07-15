const isEmpty = input => (
    input === undefined || input === null || (typeof input === 'object' && Object.keys(input).length === 0)
        || (typeof input === 'string' && input.trim().length === 0));
  const userValidation = (data) => {
    const errors = {};
    if (isEmpty(data.username)) {
      errors.usernameError = 'Username is required .';
    }
    if (isEmpty(data.email)) {
      errors.emailError = 'Email is required ';
    }
    if (isEmpty(data.password)) {
        errors.passwordError = 'Password is required ';
    }
    if (data.password < 6) {
        errors.passwordError = 'Password must be more than six characters ';
    }
    // @return all errors
    if (Object.keys(errors).length !== 0) return errors;
  };
  
  export {
    userValidation as default
  };