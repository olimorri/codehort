import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
}

interface ITestCase {
  // terminalCommand: string;
  // terminalRegex: RegExp;
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

//refactor this function after getting it working with react/redux/json data
function test(
  outputResult: IOutputResult,
  taskIdx: number,
  testCase: ITestCase,
  userCode: string
  // terminalCommand: string
) {
  // if (!testCase.terminalRegex.test(terminalCommand)) {
  //   console.log('terminalRegex', testCase.terminalRegex);

  //   outputResult = updateOutputResult(
  //     taskIdx,
  //     `Error: command not found: ${testCase.terminalCommand}`,
  //     `Are you sure this is the right command?`
  //   );
  // } else
  if (!testCase.regex.test(userCode)) {
    outputResult = updateOutputResult(taskIdx, testCase.message, testCase.suggestion);
  } else {
    outputResult = updateOutputResult(null, null, null);
  }
  return outputResult;
}

export function validator(
  lessonTask: number,
  userCode: string
  // terminalCommand: string
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
        userCode
        // terminalCommand
      );
      if (outputResult.firstFailTask !== null) return outputResult;
    }
  }
  return outputResult;
}
