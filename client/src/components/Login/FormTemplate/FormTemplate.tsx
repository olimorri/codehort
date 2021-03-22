import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../containers/Login/Login';

export default function FormContainer(props: any): JSX.Element {
  return (
    <Login>
      <div className="form-template">
        <ul className="form-nav">
          <Link to="/login">Log in</Link>
          <Link to="/register">Register</Link>
        </ul>
        {props.children}
      </div>
    </Login>
  );
}