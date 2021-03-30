import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import LottieAnimation from '../../LottieAnimation/LottieAnimation';
import pacmanLoader from '../../../animations/pacmanLoader.json';

export default function CodeEditor(props: {
  onEditorChange: (newValue: string) => void;
  userCode: string | undefined;
}): JSX.Element {
  function handleMonacoChange(value: string | undefined): void {
    const valueStr = value || '';
    props.onEditorChange(valueStr);
  }

  const [isLoading, setIsLoading] = useState(true);

  console.log(props.userCode);

  const presetText: string = `${
    props.userCode ? props.userCode : '// This is your code editor. Have fun!'
  }
`;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <>
      {isLoading ? (
        <LottieAnimation lotti={pacmanLoader} height={250} width={250} />
      ) : (
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
      )}
    </>
  );
}
