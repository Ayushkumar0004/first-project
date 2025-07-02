import { useState } from 'react';
import loginImage from '../../assets/undraw_online-test_20lm.png';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login" />
      </div>

      <div className="login-right">
        <h1>Login</h1>
        <form className='login-form'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
// styles.css