import React from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor(props: {
  onEditorChange: (newValue: string) => void;
  userCode: string | undefined;
}): JSX.Element {
  function handleMonacoChange(value: string | undefined): void {
    const valueStr = value || '';
    props.onEditorChange(valueStr);
  }

  const presetText: string = `${
    props.userCode ? props.userCode : '//Enter your code below to get started 🦖'
  }
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
      onChange={handleMonacoChange}
      className="code-editor"
    />
  );
}
