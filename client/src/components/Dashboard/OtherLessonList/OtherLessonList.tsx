import React from 'react';
import { OtherLesson } from '../../../components';
import { ILessonList, IOtherLessonListProps } from '../../../interfaces';

export default function OtherLessonList(props: IOtherLessonListProps): JSX.Element {
  const lessonList: ILessonList[] = props.lessonList;
  const userLessonIds: number[] = props.userLessons.map((userLesson) => userLesson.lessonId);

  const otherLessons: ILessonList[] = lessonList.filter(
    (lesson) => !userLessonIds.includes(lesson.lessonId)
  );

  console.log(otherLessons);

  return (
    <div className="other-lesson-list">
      {otherLessons.length ? (
        otherLessons.map((otherLesson) => (
          <OtherLesson key={otherLesson.lessonId} otherLesson={otherLesson} />
        ))
      ) : (
        <p className="notice">More lessons coming soon...</p>
      )}
    </div>
  );
}
