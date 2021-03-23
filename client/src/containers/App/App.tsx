import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/App/NavBar/NavBar';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import UserForm from '../../components/Login/UserForm/UserForm';
import LessonsOverview from '../LessonsOverview/LessonsOverview';
import Lesson from '../Lesson/Lesson';
import Error from '../Error/Error';

function App(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={UserForm} />
        <Route path="/register" component={UserForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons-overview" component={LessonsOverview} />
        <Route path="/lesson:id" component={Lesson} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
