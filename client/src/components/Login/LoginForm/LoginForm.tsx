import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FormTemplate } from '../../../components';
import { userLogin } from '../../../lib/apiService';
import { setAuthenticated, setUser } from '../../../actions';

export default function LoginForm(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'username') setUsername(event.target.value);
    if (event.target.id === 'password') setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const payload = await userLogin(username, password);
    // TODO: FIND BETTER SOLUTION. This is no XSS safe!
    localStorage.setItem('access_token', payload.access_token);
    dispatch(setUser(payload.user));
    // set isAuthenticated to true
    dispatch(setAuthenticated(true));
    // TODO: better solution for this? history.push is otherwise called too early

    function waitForLocalStorage(key: string): any | void {
      console.log('waitforLocalStorage', key, localStorage.getItem(key));
      if (!localStorage.getItem(key)) return setTimeout(waitForLocalStorage(key), 100);
      return;
    }

    waitForLocalStorage('access_token');

    // setTimeout(() => {
    history.push('/dashboard');
    // }, 250);
  };

  return (
    <FormTemplate>
      <form className="login-form" onSubmit={handleSubmit}>
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
