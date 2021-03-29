import React, { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { RiArrowRightSLine } from 'react-icons/ri';
import { ITerminalResponse } from '../../../interfaces';
import { TerminalResponse } from '../../../components';

export default function Terminal(props: {
  responses: ITerminalResponse[];
  onTerminalChange: (newValue: string) => void;
}): JSX.Element {
  const responseList = props.responses.map((response) => <TerminalResponse response={response} />);

  function handleTerminalInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const valueStr = event.target.value ?? '';
    props.onTerminalChange(valueStr);
  }

  useEffect(() => {
    const terminal = document.getElementById('terminal')!;
    terminal.scrollTop = terminal.scrollHeight;
  }, [responseList]);

  return (
    <div className="terminal" id="terminal">
      {/* additional div wrapper to negate the markup reversal from flex-direction: column-reverse */}
      <p className="notice">This is your terminal</p>
      {responseList.length > 1 && <div>{responseList}</div>}
      <div className="terminal_input">
        <IconContext.Provider value={{ size: '2em', className: 'carrot' }}>
          <RiArrowRightSLine />
        </IconContext.Provider>
        <input type="text" onChange={handleTerminalInputChange} spellCheck="false" />
      </div>
    </div>
  );
}
