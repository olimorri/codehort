import React from 'react';
import Editor from '@monaco-editor/react';
import LottieAnimation from '../LottieAnimation/LottieAnimation';
import animation from '../../animations/codeeditor.json';

export default function TextEditor(): JSX.Element {
  function handleEditorChange(value: string | undefined): void {
    console.log(value);
  }

  const presetText: string = `const express = require('express');

app.use();


//Now enter the code you need to get the server running`;

  return (
    <Editor
      theme="vs-dark"
      width="40vw"
      height="60vh"
      options={{
        fontSize: 15,
        padding: { top: 10, bottom: 10 },
        formatOnType: true,
        minimap: { enabled: false },
        wordWrap: 'on',
      }}
      loading={<LottieAnimation lotti={animation} height={1000} width={1000} />}
      defaultLanguage="javascript"
      defaultValue={presetText}
      onChange={handleEditorChange}
    />
  );
}
