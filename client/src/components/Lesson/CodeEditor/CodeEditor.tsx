import React from 'react';
import Editor from '@monaco-editor/react';

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
      width="90%"
      height="100%"
      options={{
        fontSize: 15,
        padding: { top: 10, bottom: 10 },
        formatOnType: true,
        minimap: { enabled: false },
        wordWrap: 'on',
      }}
      defaultLanguage="javascript"
      defaultValue={presetText}
      onChange={handleEditorChange}
      className="code-editor"
    />
  );
}
