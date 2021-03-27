import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson, fetchUserLessons, updateUserLessons } from '../../actions';
import { ITerminalResponse } from '../../interfaces';
import { validator } from '../../components/Lesson/Validation/validator';
import { CodeEditor, Instructions, TaskList, Terminal } from '../../components';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
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
  if (userLesson)
    userLesson.map((newLesson) => {
      if (newLesson.lessonId === currentLessonId) {
        userStep = newLesson.stepCompleted;
        return newLesson;
      }
    });

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
    //best idea might be to add userTest column to userLesson and dispatch on the above
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
                <CodeEditor onEditorChange={handleEditorChange} />
              </div>
              <div className="left-bottom">
                <Terminal responses={terminalOutput} onTerminalChange={handleTerminalChange} />
                <div className="button-list">
                  <button className="button-hint" onClick={onOpenModal}>
                    Hint
                  </button>
                  <Modal open={open} onClose={onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
                      non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
                      porttitor quam.
                    </p>
                  </Modal>
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
