import React from 'react';
import InstructionList from '../../components/Lesson/InstructionList/InstructionList';
import CodeEditor from '../../components/Lesson/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';

export default function Lesson(): JSX.Element {
  return (
    <div className="lesson">
      <div className="header">
        <h1>Lesson</h1>
      </div>
      <div className="content">
        <div className="left">
          <CodeEditor />
        </div>
        <div className="right">
          <InstructionList />
          <TaskList />
        </div>
      </div>
    </div>
  );
}
