import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor(props: {
  onEditorChange: (newValue: string) => void;
}): JSX.Element {
  function handleMonacoChange(value: string | undefined): void {
    const valueStr = value || '';
    props.onEditorChange(valueStr);
  }

  const presetText: string = `//Enter your code below to get started 🦖
`;

  useEffect(() => {
    //update editorUserInput in parent when editor loads (also need to when button clicked)
  });

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
