import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchSingleUserLesson, updateUserLessons } from '../../actions';
import { ITerminalResponse } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const user = useSelector((state: AppState) => state.user.user);
  const urlParams: { id: string } = useParams();
  const currentLessonId = +urlParams.id;
  //Logic to get the testData from lesson
  //TODO: sort out type
  const testData: any = [];
  if (lesson) {
    lesson.task?.map((selectedHint) => {
      if (selectedHint.userTest) testData.push(selectedHint.userTest);
    });
  }

  const [stepsCompleted, setStepsCompleted] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [contentFromEditor, setContentFromEditor] = useState('');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<ITerminalResponse[]>([
    {
      log: '',
      message: '',
      suggestion: '',
    },
  ]);

  const modalHintContent =
    lesson.task !== undefined ? lesson.task[stepsCompleted]?.hints[0]?.content : 'placeholder';

  const modalHintTitle =
    lesson.task !== undefined
      ? lesson.task[stepsCompleted]?.hints[0]?.title
      : 'There are no hints for this task';

  function handleEditorChange(newValue: string) {
    setContentFromEditor(newValue);
  }
  function handleTerminalChange(newValue: string) {
    setTerminalInput(newValue);
  }

  const consoleLogger = (contentFromEditor: string): string | null => {
    const regex = /console\.log\((.*)\)/;
    const result = contentFromEditor.match(regex)?.[1] || '';
    return result ? 'Log: ' + result : null;
  };

  const handleRun = () => {
    const stepsCompletedArg =
      // allows validator to run tests on the last step again
      stepsCompleted === userLesson.totalLessonSteps ? stepsCompleted - 1 : stepsCompleted;
    const validationResult = validator(
      stepsCompletedArg,
      contentFromEditor,
      terminalInput,
      testData
    );
    const stepNumber = validationResult.firstFailTask ?? stepsCompleted + 1;
    if (stepNumber <= userLesson.totalLessonSteps) setStepsCompleted(stepNumber);

    const terminalLog = consoleLogger(contentFromEditor);
    const errorMessage = validationResult.errorMessage || '';
    const errorSuggestion = validationResult.errorSuggestion || '';

    setTerminalOutput([
      ...terminalOutput,
      {
        log: terminalLog ?? '',
        message: errorMessage,
        suggestion: errorSuggestion,
      },
    ]);

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
  };

  useEffect(() => {
    const lessonAction = fetchLesson(currentLessonId);
    dispatch(lessonAction);
  }, []);

  useEffect(() => {
    const userLessonAction = fetchSingleUserLesson(user.id, currentLessonId);
    dispatch(userLessonAction);
  }, [stepsCompleted]);

  useEffect(() => {
    setStepsCompleted(userLesson.stepCompleted);
    if (userLesson.userCode) setUserCode(userLesson.userCode);
  });

  return (
    <div className="lesson">
      {lesson && userLesson && (
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
                  <Popup trigger={<button className="button-hint">HINT</button>} modal nested>
                    {(close: MouseEventHandler<HTMLButtonElement> | undefined) => (
                      <div className="modal">
                        <button className="close" onClick={close}>
                          X
                        </button>
                        <div className="header">{modalHintTitle?.toUpperCase()}</div>
                        <div className="content">{modalHintContent}</div>
                      </div>
                    )}
                  </Popup>
                  <button onClick={handleRun} className="button-run">
                    RUN
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
