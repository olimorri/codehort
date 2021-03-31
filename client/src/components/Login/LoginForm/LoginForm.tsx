import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FormTemplate } from '../../../components';
import { userLogin } from '../../../lib/apiService';
import { setAuthenticated, setUser } from '../../../actions';
import { setToken } from '../../../actions/user';

export default function LoginForm(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'username') setUsername(event.target.value);
    if (event.target.id === 'password') setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) return setErrorMsg('please enter a username and password');

    try {
      const payload = await userLogin(username, password);
      localStorage.setItem('access_token', payload.access_token);
      dispatch(setToken(payload.access_token));
      dispatch(setUser(payload.user));
      dispatch(setAuthenticated(true));
      history.push('/dashboard');
    } catch (error) {
      setPassword('');
      setErrorMsg('username and/or password incorrect');
    }
  };

  return (
    <FormTemplate>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="error"> {errorMsg}</div>
        <label htmlFor="username">USERNAME</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            value={username}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="password">PASSWORD</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button">
          START
        </button>
      </form>
    </FormTemplate>
  );
}
