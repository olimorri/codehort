import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons, updateUserLessons } from '../../actions';
import { ITerminalResponse } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

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
  if (userLesson)
    userLesson.map((newLesson) => {
      if (newLesson.lessonId === currentLessonId) {
        userStep = newLesson.stepCompleted;
        userCode = newLesson.userCode;
        return newLesson;
      }
    });

  // ========== MODAL LOGIC ==========
  const [open, setOpen] = useState(false);
  const modalRef = React.useRef(null);
  const modalHintContent =
    lesson.task !== undefined ? lesson.task[userStep]?.hints[0]?.content : 'placeholder';

  const modalHintTitle =
    lesson.task !== undefined
      ? lesson.task[userStep]?.hints[0]?.title
      : 'There are no hints for this task';
  // =================================

  const [contentFromEditor, setContentFromEditor] = useState('');
  const [terminalInput, setTerminalInput] = useState('Type your terminal command here');
  const [terminalOutput, setTerminalOutput] = useState<ITerminalResponse[]>([
    {
      message: '',
      suggestion: 'This is your terminal',
    },
  ]);

  function handleEditorChange(newValue: string) {
    setContentFromEditor(newValue);
  }
  function handleTerminalChange(newValue: string) {
    setTerminalInput(newValue);
  }

  const handleRun = () => {
    const validationResult = validator(userStep, contentFromEditor, terminalInput);
    const stepNumber = validationResult.firstFailTask ?? ++userStep;

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
      {lesson && (
        <>
          <div className="header">
            <h1>{lesson.name}</h1>
          </div>
          <div className="content">
            <div className="left">
              <div className="left-top">
                <CodeEditor onEditorChange={handleEditorChange} userCode={userCode} />
              </div>
              <div className="left-bottom">
                <Terminal responses={terminalOutput} onTerminalChange={handleTerminalChange} />
                <div className="button-list">
                  <button className="button-hint" onClick={() => setOpen(true)}>
                    Hint
                  </button>
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    container={modalRef.current}
                    // classNames={{
                    //   overlay: 'customOverlay',
                    //   modal: 'customModal',
                    // }}
                  >
                    <h2>{modalHintTitle}</h2>
                    <p>{modalHintContent}</p>
                  </Modal>
                  <div ref={modalRef} />
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
