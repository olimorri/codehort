import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons, updateUserLessons } from '../../actions';
import { ITerminalResponse } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLessons);
  const user = useSelector((state: AppState) => state.user.user);
  const urlParams: { id: string } = useParams();
  const currentLessonId = +urlParams.id;

  useEffect(() => {
    const lessonAction = fetchLesson(currentLessonId);
    dispatch(lessonAction);
  }, []);

  let userStep: number = 1;
  let userCode: string | undefined = ' ';
  if (userLesson.length)
    userLesson.map((newLesson) => {
      if (newLesson.lessonId === currentLessonId) {
        userStep = newLesson.stepCompleted;
        userCode = newLesson.userCode;
        return newLesson;
      }
    });

  //Logic to get the testData from lesson
  //TODO: sort out type

  const testData: any = [];
  if (lesson) {
    lesson.task?.map((selectedHint) => {
      if (selectedHint.userTest) testData.push(selectedHint.userTest);
    });
  }

  const [contentFromEditor, setContentFromEditor] = useState('');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<ITerminalResponse[]>([
    {
      message: '',
      suggestion: '',
    },
  ]);

  const modalHintContent =
    lesson.task !== undefined ? lesson.task[userStep]?.hints[0]?.content : 'placeholder';

  const modalHintTitle =
    lesson.task !== undefined
      ? lesson.task[userStep]?.hints[0]?.title
      : 'There are no hints for this task';

  function handleEditorChange(newValue: string) {
    setContentFromEditor(newValue);
  }
  function handleTerminalChange(newValue: string) {
    setTerminalInput(newValue);
  }

  const handleRun = () => {
    //In order to test the input we need to pass the testData into the validator as per below
    const validationResult = validator(userStep, contentFromEditor, terminalInput, testData);
    const stepNumber = validationResult.firstFailTask ?? ++userStep;
    const errorMessage = validationResult.errorMessage || '';
    const errorSuggestion = validationResult.errorSuggestion || '';

    dispatch(
      updateUserLessons(
        user.id,
        lesson.id,
        stepNumber,
        lesson.name,
        lesson.numberOfTasks,
        contentFromEditor
      )
    );

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
      {lesson && userLesson.length && (
        <>
          <div className="header">
            <h1>{lesson.name.toUpperCase()}</h1>
          </div>
          <div className="content">
            <div className="left">
              <div className="left-top">
                <CodeEditor onEditorChange={handleEditorChange} userCode={userCode} />
              </div>
              <div className="left-bottom">
                <Terminal responses={terminalOutput} onTerminalChange={handleTerminalChange} />
                <div className="button-list">
                  <Popup trigger={<button className="button-hint">Hint</button>} modal nested>
                    {(close: any) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header">{modalHintTitle}</div>
                        <div className="content">{modalHintContent}</div>
                      </div>
                    )}
                  </Popup>
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
        </>
      )}
    </div>
  );
}
