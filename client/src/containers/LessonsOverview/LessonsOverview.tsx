import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/configureStore';
import { LessonCardList } from '../../components';

export default function LessonsOverview(): JSX.Element {
  const lessonList = useSelector((state: AppState) => state.lessonList.lessonList);

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
