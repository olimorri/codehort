import React from 'react';
import Instructions from '../../components/Lesson/Instructions/Instructions';
import CodeEditor from '../../components/Lesson/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';
import Terminal from '../../components/Lesson/Terminal/Terminal';

export default function Lesson(): JSX.Element {
  return (
    <div className="lesson">
      <div className="header">
        <h1>Lesson</h1>
      </div>
      <div className="content">
        <div className="left">
          <div className="left-top">
            <CodeEditor />
          </div>
          <div className="left-bottom">
            <Terminal />
            <div className="button-list">
              <button className="button-hint">Hint</button>
              <button className="button-run">Run</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-top">
            <Instructions />
          </div>
          <div className="right-bottom">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
