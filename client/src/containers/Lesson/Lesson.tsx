import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchSingleUserLesson, updateUserLessons } from '../../actions';
import { ITerminalResponse, IUserTest } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, LottieAnimation, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import pacmanLoader from '../../animations/pacmanLoader.json';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);
  const userLessons = useSelector((state: AppState) => state.userLessons.userLessons);
  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const user = useSelector((state: AppState) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  const urlParams: { id: string } = useParams();
  const currentLessonId = +urlParams.id;

  //Logic to get the testData from lesson
  const testData: IUserTest[][] = [];
  if (lesson) {
    lesson.task?.map((selectedHint) => {
      if (selectedHint.userTest) testData.push([selectedHint.userTest]);
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
  const [rewardModalOpen, setRewardModalOpen] = useState(false);
  const closeRewardModal = () => setRewardModalOpen(false);

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
    if (stepsCompleted >= userLesson.totalLessonSteps) {
      console.log('lesson completed');
      return;
    } else {
      const validationResult = validator(
        stepsCompleted,
        contentFromEditor,
        terminalInput,
        testData
      );
      const stepNumber = validationResult.firstFailTask ?? stepsCompleted + 1;
      if (stepNumber <= userLesson.totalLessonSteps) setStepsCompleted(stepNumber);

      const terminalLog = consoleLogger(contentFromEditor);
      const errorMessage = validationResult.errorMessage || '';
      const errorSuggestion = validationResult.errorSuggestion || '';

      setTerminalInput('');

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

      if (stepNumber === userLesson.totalLessonSteps) {
        setTimeout(() => {
          setRewardModalOpen((closed) => !closed);
        }, 3000);
      }
    }
  };

  useEffect(() => {
    const lessonAction = fetchLesson(currentLessonId);
    dispatch(lessonAction);
  }, []);

  useEffect(() => {
    const userLessonAction = fetchSingleUserLesson(user.id, currentLessonId);
    dispatch(userLessonAction);
    if (userLesson) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [stepsCompleted, userLessons]);

  useEffect(() => {
    setStepsCompleted(userLesson.stepCompleted);
    if (userLesson.userCode) setUserCode(userLesson.userCode);
  }, [userLesson]);

  return (
    <div className="lesson">
      {isLoading ? (
        <LottieAnimation lotti={pacmanLoader} height={500} width={500} />
      ) : (
        <>
          (
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
                    <Terminal
                      responses={terminalOutput}
                      onTerminalChange={handleTerminalChange}
                      terminalInput={terminalInput}
                    />
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
              <div>
                <Popup
                  open={rewardModalOpen}
                  closeOnDocumentClick={false}
                  onClose={closeRewardModal}
                >
                  <div className="modal">
                    <h2 className="header">You have completed all tasks in this quest</h2>
                    <div className="content flex-container">
                      <p>Nicely done! Click below to claim your reward</p>
                      <button onClick={closeRewardModal}>Claim Reward</button>
                    </div>
                  </div>
                </Popup>
              </div>
            </>
          )}
          )
        </>
      )}
    </div>
  );
}
