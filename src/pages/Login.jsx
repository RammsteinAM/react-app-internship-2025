import { useRef } from 'react';
import { useAuthContext } from '../context/authContext';

function Login() {
  const formRef = useRef();
  const { signIn } = useAuthContext();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const loginResponse = signIn(data);

    if (loginResponse.hasError) {
      alert(loginResponse.message);
      formRef.current.reset();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} ref={formRef} autoComplete="off">
          <div className="login-form-group">
            <label htmlFor="username" className="login-form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="login-form-input"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="login-form-input"
            />
          </div>
          <button type="submit" className="login-submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
