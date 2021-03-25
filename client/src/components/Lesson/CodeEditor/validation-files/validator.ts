import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
}

interface ITestCase {
  terminalRegex: RegExp;
  regex: RegExp;
  variableRegex: RegExp;
  message: string;
  suggestion: string;
}

const outputResult: IOutputResult = {
  firstFailTask: null,
  errorMessage: null,
  errorSuggestion: null,
};

//refactor this function after getting it working with react/redux/json data
function test(taskIdx: number, testCase: ITestCase, userCode: string, terminalCommand: string) {
  if (!testCase.terminalRegex.test(terminalCommand)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = `Error: command not found: ${terminalCommand}`;
    outputResult.errorSuggestion = `Are you sure this is the right command?`;
  } else if (!testCase.regex.test(userCode)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = testCase.message;
    outputResult.errorSuggestion = testCase.suggestion;
  } else {
    outputResult.firstFailTask = null;
    outputResult.errorMessage = 'pass';
    outputResult.errorSuggestion = 'pass';
  }
}

export function validator(
  lessonTask: number,
  userCode: string,
  terminalCommand: string
): IOutputResult {
  for (let taskIdx = 0; taskIdx <= lessonTask; taskIdx++) {
    const taskArray = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskArray.length; testIdx++) {
      test(taskIdx, testData[taskIdx][testIdx], userCode, terminalCommand);
      if (outputResult.firstFailTask !== null) return outputResult;
    }
  }
  return outputResult;
}
