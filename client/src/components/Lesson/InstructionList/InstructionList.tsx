import React from 'react';
import Instruction from '../Instruction/Instruction';

export default function InstructionList(): JSX.Element {
  return (
    <div className="instruction-list">
      <Instruction />
      <Instruction />
      <Instruction />
    </div>
  );
}
