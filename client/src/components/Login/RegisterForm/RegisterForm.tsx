import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { userRegister } from '../../../lib/apiService';
import { FormTemplate } from '../../../components';
import { setUser, setAuthenticated } from '../../../actions';
import { setToken } from '../../../actions/user';

export default function RegisterForm(): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'password2':
        setPassword2(event.target.value);
        break;
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!username || !email || !password) return setErrorMsg('all fields are required');
    if (password !== password2) return setErrorMsg('passwords do not match');
    const payload = await userRegister(username, password, email);
    if (payload === undefined) return setErrorMsg('this username already exists');
    dispatch(setUser(payload.user));
    // TODO: FIND BETTER SOLUTION. This is no XSS safe!
    localStorage.setItem('access_token', payload.access_token);
    dispatch(setToken(payload.access_token));
    dispatch(setAuthenticated(true));
    history.push('/dashboard');
  };

  return (
    <FormTemplate>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="error">{errorMsg}</div>
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
            spellCheck="false"
            value={username}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email">EMAIL ADDRESS</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            spellCheck="false"
            value={email}
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
            spellCheck="false"
            value={password}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="reenter-password">RE-ENTER PASSWORD</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input
            type="password"
            id="password2"
            name="reenter-password"
            autoComplete="off"
            spellCheck="false"
            value={password2}
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
