import React from 'react';
import { ITerminalResponse } from '../../../interfaces/lesson';
import TerminalResponse from '../TerminalResponse/TerminalResponse';

export default function Terminal(props: { responses: ITerminalResponse[] }): JSX.Element {
  const responseList = props.responses.map((response) => <TerminalResponse response={response} />);

  return <div className="terminal">{responseList}</div>;
}
