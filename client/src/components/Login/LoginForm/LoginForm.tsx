import React from 'react';
import FormTemplate from '../FormTemplate/FormTemplate';
import { Link } from 'react-router-dom';

export default function LoginForm(): JSX.Element {
  return (
    <FormTemplate>
      <h1>I am a Login Form</h1>
      <Link to="/dashboard">Log in</Link>
    </FormTemplate>
  );
}
