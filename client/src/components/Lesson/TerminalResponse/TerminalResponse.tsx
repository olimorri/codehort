import React from 'react';
import { ITerminalResponse } from '../../../interfaces';

export default function TerminalResponse(props: { response: ITerminalResponse }): JSX.Element {
  return (
    <div className="terminalResponse">
      <div className="terminalLog">{props.response.log}</div>
      <div className="terminalMessage">{props.response.message}</div>
      <div className="terminalSuggestion">{props.response.suggestion}</div>
    </div>
  );
}
