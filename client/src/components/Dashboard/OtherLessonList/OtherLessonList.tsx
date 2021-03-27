import React from 'react';
import { OtherLesson } from '../../../components';
import { IOtherLessonListProps } from '../../../interfaces';

export default function OtherLessonList(props: IOtherLessonListProps): JSX.Element {
  const newLessons: number[] = [];
  return (
    <div className="other-lesson-list">
      {newLessons.length ? (
        newLessons.map((newLesson) => <OtherLesson key={newLesson} />)
      ) : (
        <p className="notice">More lessons coming soon...</p>
      )}
    </div>
  );
}
