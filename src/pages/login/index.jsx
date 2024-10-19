// importing components
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// importing constants
import { PagePath, UserRole } from '../../config/Constants';

// importing store
import useAuthStore from '../../store/authStore';

// login page
function Login() {
  const navigate = useNavigate();

  // authStore
  const { login } = useAuthStore();

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

    // dummy data
    const user = {
      username: 'jon.doe',
      email: 'jondoe@email.com',
    };

    const role = UserRole.CUSTOMER;
    const token = 'token';

    // login user
    login(user, role, token);

    console.log('User logged in.');

    // redirect user to home page
    navigate(PagePath.HOME);
  };

  return (
    <div className="login">
      <div className="login__header text-2xl">Login.</div>

      <div className="login__form my-5">
        <form onSubmit={handleSubmit}>
          <div className="login__form__email mb-3">
            <input
              label="Email"
              placeholder="joe@email.com"
              type="email"
              onChange={handleEmail}
              required
            />
          </div>

          <div className="login__form__password mb-3">
            <input
              label="Password"
              placeholder="******"
              type="password"
              onChange={handlePassword}
              required
            />
          </div>

          <div className="login__form__submit">
            <button type="submit">Login</button>
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
