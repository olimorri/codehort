import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
}

const outputResult: IOutputResult = {
  firstFailTask: null,
  errorMessage: null,
  errorSuggestion: null,
};

//refactor this function after getting it working with react/redux/json data
function test(taskIdx: number, testIdx: number, userCode: string, terminalCommand: string) {
  if (!testData[taskIdx][testIdx].terminalRegex.test(terminalCommand)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = `Error: command not found: ${terminalCommand}`;
    outputResult.errorSuggestion = `Are you sure this is the right command?`;
  } else if (!testData[taskIdx][testIdx].regex.test(userCode)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = testData[taskIdx][testIdx].message;
    outputResult.errorSuggestion = testData[taskIdx][testIdx].suggestion;
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
      test(taskIdx, testIdx, userCode, terminalCommand);
      if (outputResult.firstFailTask !== null) return outputResult;
    }
  }
  return outputResult;
}
