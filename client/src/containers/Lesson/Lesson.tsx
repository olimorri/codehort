import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson } from '../../actions';
import Instructions from '../../components/Lesson/Instructions/Instructions';
import CodeEditor from '../../components/Lesson/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';
import Terminal from '../../components/Lesson/Terminal/Terminal';
import { validator } from '../../components/Lesson/Validation/validator';
import { ITerminalResponse } from '../../interfaces/lesson';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const [contentFromEditor, setContentFromEditor] = useState('');
  const [taskIndex, setTaskIndex] = useState(5);
  const [terminalOutput, setTerminalOutput] = useState<ITerminalResponse[]>([
    {
      message: '',
      suggestion: 'This is your terminal',
    },
  ]);

  function handleEditorChange(newValue: string) {
    setContentFromEditor(newValue);
  }

  // // const terminalSuggestion =
  // // const terminalMessage =
  // const terminalOutput = terminalMessage + '\n' + terminalSuggestion;

  const handleRun = () => {
    const validationResult = validator(taskIndex, contentFromEditor);
    setTaskIndex(validationResult.firstFailTask || taskIndex + 1);
    const errorMessage = validationResult.errorMessage || '';
    const errorSuggestion = validationResult.errorSuggestion || '';

    setTerminalOutput([
      ...terminalOutput,
      {
        message: errorMessage,
        suggestion: errorSuggestion,
      },
    ]);

    //run Vinny's logic
    //if false => Alert('try again');
    //if true => updateUserLessonStepAction on UserLesson
    // .then render next task info
  };

  useEffect(() => {
    const lessonAction = fetchLesson();
    dispatch(lessonAction);
  }, []);

  return (
    <div className="lesson">
      <div className="header">
        <h1>{lesson.name}</h1>
      </div>
      <div className="content">
        <div className="left">
          <div className="left-top">
            <CodeEditor onEditorChange={handleEditorChange} />
          </div>
          <div className="left-bottom">
            <Terminal responses={terminalOutput} />
            <div className="button-list">
              <button className="button-hint">Hint</button>
              <button onClick={handleRun} className="button-run">
                Run
              </button>
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
