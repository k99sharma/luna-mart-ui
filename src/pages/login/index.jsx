// importing components
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

// importing constants
import { PagePath } from '../../config/Constants';
import { useState } from 'react';

// login page
function Login() {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // email handler
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  // password handler
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // submit form
  const handleSubmit = () => {
    console.log(email);
    console.log(password);

    // reset state
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <div className="login__header text-2xl">Login.</div>

      <div className="login__form my-5">
        <form onSubmit={handleSubmit}>
          <div className="login__form__email mb-3">
            <TextField
              size="small"
              label="Email"
              placeholder="joe@email.com"
              variant="outlined"
              type="email"
              onChange={handleEmail}
              required
            />
          </div>

          <div className="login__form__password mb-3">
            <TextField
              size="small"
              label="Password"
              placeholder="******"
              variant="outlined"
              type="password"
              onChange={handlePassword}
              required
            />
          </div>

          <div className="login__form__submit">
            <Button variant="contained">Login</Button>
          </div>
        </form>
      </div>

      <div className="login__registeration__navigation flex">
        <div className="login__registeration__navigation__text">
          Dont have an account?
        </div>
        <div className="login__registeration__navigation__button ml-1 font-semibold">
          <Link to={PagePath.REGISTER}>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
