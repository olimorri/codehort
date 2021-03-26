import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import LessonsOverview from '../LessonsOverview/LessonsOverview';
import Lesson from '../Lesson/Lesson';
import Error from '../Error/Error';
import { RouterGuard, NavBar, LoginForm, RegisterForm } from '../../components/';

function App(): JSX.Element {
  // TODO: Proper checking of authorization
  const user = useSelector((state: AppState) => state.user.user);
  const isLoggedIn = user.id?.length > 0 ? true : false;
  console.log('App.tsx isLoggedIn', isLoggedIn);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <RouterGuard
          path="/dashboard"
          component={Dashboard}
          isLoggedIn={isLoggedIn}
          logInPath="/login"
        />
        <RouterGuard
          path="/lessons-overview"
          component={LessonsOverview}
          isLoggedIn={isLoggedIn}
          logInPath="/login"
        />
        <RouterGuard
          path="/lesson/:id"
          component={Lesson}
          isLoggedIn={isLoggedIn}
          logInPath="/login"
        />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons-overview" component={LessonsOverview} />
        <Route path="/lesson:id" component={Lesson} /> */}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
