import React from 'react';
import { OtherLesson } from '../../../components';
import { ILessonList, IOtherLessonListProps } from '../../../interfaces';

export default function OtherLessonList(props: IOtherLessonListProps): JSX.Element {
  const lessonList: ILessonList[] = props.lessonList;
  const userLessonIds: number[] = props.userLessons.map((userLesson) => userLesson.lessonId);

  const otherLessons: ILessonList[] = lessonList.filter(
    (lesson) => !userLessonIds.includes(lesson.lessonId)
  );

  return (
    <div className="other-lesson-list">
      {otherLessons.length ? (
        otherLessons.slice(0, 3).map((otherLesson) => {
          console.log(otherLesson);
          return <OtherLesson key={otherLesson.id} otherLesson={otherLesson} />;
        })
      ) : (
        <p className="notice">Coming soon...</p>
      )}
    </div>
  );
}
