import { useState, FormEvent } from 'react';
import useAuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, errors } = useAuthContext();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return <div></div>;
};

export default Login;
