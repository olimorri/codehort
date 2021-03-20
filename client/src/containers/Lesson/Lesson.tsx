import React from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import TaskList from '../../components/TaskList/TaskList';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>I am a Lesson</h1>
      <CodeEditor />
      <TaskList />
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
