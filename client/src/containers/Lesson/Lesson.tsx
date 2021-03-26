import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons, updateUserLessons } from '../../actions';
import { ITerminalResponse } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLessons);
  const user = useSelector((state: AppState) => state.user.user);

  const params: { id: string } = useParams();
  const id = +params.id;

  let userStep: number = 1;
  if (userLesson)
    userLesson.map((newLesson) => {
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

    dispatch(updateUserLessons(user.id, lesson.id, stepNumber));
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
