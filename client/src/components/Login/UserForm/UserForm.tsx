import React from 'react';
import FormTemplate from '../FormTemplate/FormTemplate';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function LoginForm(): JSX.Element {
  return (
    <FormTemplate>
      <form className="user-form">
        <label htmlFor="email">email address</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input type="email" name="email"></input>
        </div>
        <label htmlFor="password">password</label>
        <div className="form-input">
          <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
            <RiArrowRightSLine />
          </IconContext.Provider>
          <input type="password" name="password" />
        </div>
        <button type="submit" className="button">
          Enter
        </button>
      </form>
    </FormTemplate>
  );
}
