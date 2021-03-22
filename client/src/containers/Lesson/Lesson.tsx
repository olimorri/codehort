import React from 'react';
import { Link } from 'react-router-dom';
import InstructionList from '../../components/Lesson/InstructionList/InstructionList';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';

export default function Landing(): JSX.Element {
  return (
    <div>
      <h1>Lesson 1</h1>
      <InstructionList />
      <CodeEditor />
      <TaskList />
    </div>
  );
}
