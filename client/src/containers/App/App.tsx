import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { Dashboard, Error, Landing, Lesson, LessonsOverview } from '../../containers';
import { RouterGuard, NavBar, LoginForm, RegisterForm } from '../../components/';
import { getUser } from '../../lib/apiService';
import { setAuthenticated, setUser } from '../../actions';

function App(): JSX.Element {
  const isAuthenticated = useSelector((state: AppState) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      getUser().then((user) => {
        dispatch(setUser(user));
        dispatch(setAuthenticated(true));
      });
    }
  });

  const isLoggedIn = useSelector((state: AppState) => state.user.isAuthenticated);
  console.log('App.tsx isLoggedIn', isLoggedIn);

  return (
    <div>
      <NavBar />
      <main>
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
      </main>
    </div>
  );
}

export default App;
