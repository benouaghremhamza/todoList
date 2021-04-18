import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/actions';
import InputField from '../../components/atoms/InputField';
import Button from '../../components/atoms/Button';
import withStyle from './withStyle';

const Login = ({ className }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    dispatch(login({ username: email, password }));
  };

  return (
    <div className={className}>
      <form onSubmit={() => loginUser()}>
        <div className="form-inputs">
          <label htmlFor="email">
            Adresse email:
            <InputField
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </label>

          <label htmlFor="password">
            Mot de passe:
            <InputField
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </label>
        </div>

        <Button
          type="submit"
          skin="fill"
          color="blue"
          borderRadius="0.5rem"
          padding="1rem 4rem"
          withAnimation
          wide
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default withStyle(Login);
