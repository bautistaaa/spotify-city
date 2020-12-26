import login from './services/auth/login';

const Login = () => {
  const handleClick = () => {
    login();
  };
  return <button onClick={handleClick}>Sign In</button>;
};

export default Login;

