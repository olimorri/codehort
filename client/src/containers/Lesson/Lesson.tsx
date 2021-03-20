import React from 'react';
import { Link } from 'react-router-dom';
import Instructions from '../../components/Instructions/Instructions';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import TaskList from '../../components/TaskList/TaskList';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>Lesson 1</h1>
      <Instructions />
      <CodeEditor />
      <TaskList />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
