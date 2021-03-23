import React from 'react';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import FormTemplate from '../FormTemplate/FormTemplate';

export default function RegisterForm(): JSX.Element {
  return (
    <FormTemplate>
      <form className="register-form">
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
          Register
        </button>
      </form>
    </FormTemplate>
  );
}
