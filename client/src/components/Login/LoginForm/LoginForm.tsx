import React from 'react';
import FormTemplate from '../FormTemplate/FormTemplate';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function LoginForm(): JSX.Element {
  return (
    <FormTemplate>
      <form className="login-form">
        <label htmlFor="username">username</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input type="text" name="username" autoComplete="off" />
        </div>
        <label htmlFor="password">password</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input type="password" name="password" autoComplete="off" />
        </div>
        <button type="submit" className="button">
          Enter
        </button>
      </form>
    </FormTemplate>
  );
}
