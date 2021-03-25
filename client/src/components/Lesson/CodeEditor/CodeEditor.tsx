import React from 'react';
import Editor from '@monaco-editor/react';
import { validator } from './validation-files/validator';

export default function CodeEditor(): JSX.Element {
  function handleEditorChange(value: string | undefined): void {
    const valueStr = value || '';
    console.log(validator(5, valueStr));
  }

  const presetText: string = `//Enter your code below to get started 🦖
`;

  return (
    <Editor
      theme="vs-dark"
      width="90%"
      height="100%"
      options={{
        fontSize: 16,
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
