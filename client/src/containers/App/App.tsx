import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLesson } from '../../actions/lessons';
import NavBar from '../../components/App/NavBar/NavBar';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import RegisterForm from '../../components/Login/RegisterForm/RegisterForm';
import LessonsOverview from '../LessonsOverview/LessonsOverview';
import Lesson from '../Lesson/Lesson';
import Error from '../Error/Error';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state) => state.lesson);

  useEffect(() => {
    const action = fetchLesson();
    dispatch(action);
  }, []);

  useEffect(() => {
    console.log(lesson);
  }, [lesson]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lessons-overview" component={LessonsOverview} />
        <Route path="/lesson:id" component={Lesson} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
