import React from 'react';
import { ITerminalResponse } from '../../../interfaces/lesson';
import { TerminalResponse } from '../../../components';

export default function Terminal(props: { responses: ITerminalResponse[] }): JSX.Element {
  const responseList = props.responses.map((response) => <TerminalResponse response={response} />);

  return (
    <div className="terminal">
      {/* additional div wrapper to negate the markup reversal from flex-direction: column-reverse */}
      <div>{responseList}</div>
    </div>
  );
}
