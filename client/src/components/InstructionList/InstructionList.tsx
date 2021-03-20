import React from 'react';
import Instruction from '../Instruction/Instruction';

export default function InstructionList(): JSX.Element {
  return (
    <div>
      <p>First things first, we need to install express and import it as a dependency</p>
      <Instruction />
    </div>
  );
}
