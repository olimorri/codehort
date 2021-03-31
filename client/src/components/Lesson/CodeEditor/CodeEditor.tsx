import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/configureStore';

export default function CodeEditor(props: {
  onEditorChange: (newValue: string) => void;
  userCode: string | undefined;
}): JSX.Element {
  function handleMonacoChange(value: string | undefined): void {
    const valueStr = value || '';
    props.onEditorChange(valueStr);
  }

  const userLesson = useSelector((state: AppState) => state.userLessons.userLesson);
  const [presetText, setPresetText] = useState('// This is your code editor. Have fun!\n');

  useEffect(() => {
    if (userLesson.userCode) setPresetText(userLesson.userCode);
  }, [userLesson]);

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
