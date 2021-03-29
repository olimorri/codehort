import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState, persistor } from '../../store/configureStore';
import { Dashboard, Error, Landing, Lesson, LessonsOverview } from '../../containers';
import { RouterGuard, NavBar, LoginForm, RegisterForm } from '../../components/';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  const isLoggedIn = useSelector((state: AppState) => state.user.isAuthenticated);
  console.log('App.tsx isLoggedIn', isLoggedIn);

  return (
    <div>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </div>
  );
}

export default App;
