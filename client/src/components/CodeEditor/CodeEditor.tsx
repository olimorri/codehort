import React from 'react';
import Editor from '@monaco-editor/react';
import './CodeEditor.sass';

function TextEditor(): any {
  function handleEditorChange(value: any, event: any): void {
    console.log(value);
  }

  const welcomeText: string = `const express = require('express');
  
  app.use();


 //Now enter the code you need to get the server running`;

  return (
    <Editor
      className="editor"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={welcomeText}
      line={2}
      onChange={handleEditorChange}
    />
  );
}

export default TextEditor;
