import React from 'react';

interface taskNameProps {
  key: number | undefined;
  name: string;
}

export default function Task(props: taskNameProps): JSX.Element {
  console.log(props);
  return (
    <div className="task">
      <p>{props.name}</p>
    </div>
  );
}
