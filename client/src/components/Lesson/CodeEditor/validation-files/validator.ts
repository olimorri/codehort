import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number;
  errorMessage: string;
  errorSuggestion: string;
}

const outputResult: IOutputResult = {
  firstFailTask: -1, // this signals a pass for the current task
  errorMessage: 'message placeholder',
  errorSuggestion: 'suggestion placeholder',
};

function test(taskIdx: number, testIdx: number, userCode: string, terminalCommand: string) {
  if (!testData[taskIdx][testIdx].terminalRegex.test(terminalCommand)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = `Error: command not found: ${terminalCommand}`;
    outputResult.errorSuggestion = `Are you sure this is the right command?`;
  } else if (!testData[taskIdx][testIdx].regex.test(userCode)) {
    outputResult.firstFailTask = taskIdx;
    outputResult.errorMessage = testData[taskIdx][testIdx].message;
    outputResult.errorSuggestion = testData[taskIdx][testIdx].suggestion;
  }
}

export function validator(
  lessonTask: number,
  userCode: string,
  terminalCommand: string
): IOutputResult {
  // O(n^2) - quadratic complexity - any improvement necessary?
  for (let taskIdx = 0; taskIdx <= lessonTask; taskIdx++) {
    const taskArray = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskArray.length; testIdx++) {
      test(taskIdx, testIdx, userCode, terminalCommand);
      if (outputResult.firstFailTask !== -1) return outputResult; // short-circuits
    }
  }
  return outputResult;
}
