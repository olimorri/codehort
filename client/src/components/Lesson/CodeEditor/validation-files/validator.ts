import { testData } from './test-data';

// function regexSame(regexA: RegExp, regexB: RegExp): boolean {
//   if (regexA instanceof RegExp && regexB instanceof RegExp) {
//     const props = ['global', 'multiline', 'ignoreCase', 'source', 'dotAll', 'sticky', 'unicode'];
//     for (let i = 0; i < props.length; i++) {
//       const prop = props[i];
//       if (regexA[prop] !== regexB[prop]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// }

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
