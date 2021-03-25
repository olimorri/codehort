import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../actions';
import { AppState } from '../../store/configureStore';
import NavBar from '../../components/App/NavBar/NavBar';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import RegisterForm from '../../components/Login/RegisterForm/RegisterForm';
import LessonsOverview from '../LessonsOverview/LessonsOverview';
import Lesson from '../Lesson/Lesson';
import Error from '../Error/Error';

function App(): JSX.Element {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const userAction = fetchUser('yourUsername', 'yourPassword');
  //   dispatch(userAction);
  // }, []);

  // TODO: Proper checking of authorization
  const user = useSelector((state: AppState) => state.user.user);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route render={() => (user.id?.length ? <Dashboard /> : <Redirect to="/login" />)} />
        <Route render={() => (user.id?.length ? <LessonsOverview /> : <Redirect to="/login" />)} />
        <Route render={() => (user.id?.length ? <Lesson /> : <Redirect to="/login" />)} />
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons-overview" component={LessonsOverview} />
        <Route path="/lesson:id" component={Lesson} /> */}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
