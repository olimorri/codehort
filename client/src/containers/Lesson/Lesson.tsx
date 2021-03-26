import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons } from '../../actions';
import Instructions from '../../components/Lesson/Instructions/Instructions';
import CodeEditor from '../../components/Lesson/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';
import Terminal from '../../components/Lesson/Terminal/Terminal';
import { validator } from '../../components/Lesson/Validation/validator';
import { ITerminalResponse } from '../../interfaces/lesson';
import { updateUserLessons } from '../../actions/userLessons';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLessons);
  const user = useSelector((state: AppState) => state.user.user);

  console.log(userLesson, 'userlesson');
  let userStep: number = 1;
  const selectedLesson = userLesson.map((newLesson) => {
    if (newLesson.lessonId === lesson.id) {
      userStep = newLesson.stepCompleted;
      return newLesson;
    }
  });

  const [contentFromEditor, setContentFromEditor] = useState('');

  const [terminalOutput, setTerminalOutput] = useState<ITerminalResponse[]>([
    {
      message: '',
      suggestion: 'This is your terminal',
    },
  ]);

  function handleEditorChange(newValue: string) {
    setContentFromEditor(newValue);
  }

  const handleRun = () => {
    const validationResult = validator(userStep, contentFromEditor);
    const stepNumber = validationResult.firstFailTask ?? ++userStep;
    dispatch(updateUserLessons('c688a7c2-805a-45ac-9fa8-e9ce5c57e197', lesson.id, stepNumber));
    const errorMessage = validationResult.errorMessage || '';
    const errorSuggestion = validationResult.errorSuggestion || '';

    setTerminalOutput([
      ...terminalOutput,
      {
        message: errorMessage,
        suggestion: errorSuggestion,
      },
    ]);
  };

  useEffect(() => {
    const lessonAction = fetchLesson();
    dispatch(lessonAction);
  }, []);

  useEffect(() => {
    const userLessonAction = fetchUserLessons(user.id);
    dispatch(userLessonAction);
  }, [userStep]);

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
