import React, { FormEvent, useState } from 'react';
import FormTemplate from '../FormTemplate/FormTemplate';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { userLogin } from '../../../lib/apiService';

export default function LoginForm(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event: any) => {
    if (event.target.id === 'username') setUsername(event.target.value);
    if (event.target.id === 'password') setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    userLogin(username, password);
  };

  return (
    <FormTemplate>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
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
        <label htmlFor="password">password</label>
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
          Enter
        </button>
      </form>
    </FormTemplate>
  );
}
