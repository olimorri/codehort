import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
}

interface ITestCase {
  // terminalCommand: string | null;
  terminalRegex: RegExp | null;
  regex: RegExp;
  // variableRegex: RegExp;
  message: string;
  suggestion: string;
}

function updateOutputResult(
  firstFailTask: number | null,
  errorMessage: string | null,
  errorSuggestion: string | null
): IOutputResult {
  return {
    firstFailTask: firstFailTask,
    errorMessage: errorMessage,
    errorSuggestion: errorSuggestion,
  };
}

function test(
  outputResult: IOutputResult,
  taskIdx: number,
  testCase: ITestCase,
  userCode: string,
  terminalInput: string
) {
  if (testCase.terminalRegex !== null && !testCase.terminalRegex.test(terminalInput)) {
    outputResult = updateOutputResult(
      taskIdx,
      `Error: command not correct: ${terminalInput}`,
      `Are you sure this is the right terminal command?`
    );
  } else if (!testCase.regex.test(userCode)) {
    outputResult = updateOutputResult(taskIdx, testCase.message, testCase.suggestion);
  } else {
    outputResult = updateOutputResult(null, null, "Well done, you've passed the test!");
  }
  return outputResult;
}

export function validator(
  lessonTask: number,
  userCode: string,
  terminalInput: string
): IOutputResult {
  let outputResult: IOutputResult = {
    firstFailTask: null,
    errorMessage: null,
    errorSuggestion: null,
  };

  for (let taskIdx = 0; taskIdx <= lessonTask; taskIdx++) {
    const taskArray = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskArray.length; testIdx++) {
      outputResult = test(
        outputResult,
        taskIdx,
        testData[taskIdx][testIdx],
        userCode,
        terminalInput
      );
      if (outputResult.firstFailTask !== null) return outputResult;
    }
  }
  return outputResult;
}
