import useAuthContext from '../../context/AuthContext';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const { register, errors }: any = useAuthContext();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return <div></div>;
};

export default Register;
