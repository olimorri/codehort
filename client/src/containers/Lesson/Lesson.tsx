import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import InstructionList from '../../components/InstructionList/InstructionList';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import TaskList from '../../components/TaskList/TaskList';

export default function Landing(): JSX.Element {
  return (
    <div>
      <NavBar />
      <h1>Lesson 1</h1>
      <InstructionList />
      <CodeEditor />
      <TaskList />
    </div>
  );
}
