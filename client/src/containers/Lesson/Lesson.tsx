import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { fetchLesson } from '../../actions';
import Instructions from '../../components/Lesson/Instructions/Instructions';
import CodeEditor from '../../components/Lesson/CodeEditor/CodeEditor';
import TaskList from '../../components/Lesson/TaskList/TaskList';
import Terminal from '../../components/Lesson/Terminal/Terminal';

export default function Lesson(): JSX.Element {
  const dispatch = useDispatch();
  const lesson = useSelector((state: AppState) => state.lesson.lesson);

  const handleRun = () => {
    console.log('hello');
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
            <CodeEditor />
          </div>
          <div className="left-bottom">
            <Terminal />
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
