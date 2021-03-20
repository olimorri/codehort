import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Lesson from '../Lesson/Lesson';
import Error from '../Error/Error';

function App(): any {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/lesson" component={Lesson} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
