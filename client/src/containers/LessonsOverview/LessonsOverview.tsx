import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { LessonCardList } from '../../components';
import { fetchLessonList } from '../../actions';

export default function LessonsOverview(): JSX.Element {
  const lessonList = useSelector((state: AppState) => state.lessonList.lessonList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lessonList?.length) {
      const lessonListAction = fetchLessonList();
      dispatch(lessonListAction);
    }
  }, []);

  return (
    <div className="lessons-overview">
      <div className="header">
        <h1>START A NEW QUEST</h1>
      </div>
      <div className="content">
        <LessonCardList lessonList={lessonList} />
      </div>
    </div>
  );
}
