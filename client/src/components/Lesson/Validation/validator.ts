import { IUserTest } from '../../../interfaces';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
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
  testCase: IUserTest,
  userCode: string,
  terminalInput: string
) {
  //Logic to test if we have the necessary regexes and if so,
  //to convert the string to a useable regex expression

  const convertedRegex: RegExp | null = testCase.regex ? new RegExp(testCase.regex) : null;
  const convertedTerminalRegex: RegExp | null = testCase.terminalRegex
    ? new RegExp(testCase.terminalRegex)
    : null;

  if (convertedTerminalRegex !== null && !convertedTerminalRegex.test(terminalInput)) {
    outputResult = updateOutputResult(
      taskIdx,
      `Error: command not correct: ${terminalInput}`,
      `Are you sure this is the right terminal command?`
    );
  } else if (convertedRegex && !convertedRegex.test(userCode)) {
    outputResult = updateOutputResult(taskIdx, testCase.message, testCase.suggestion);
  } else {
    outputResult = updateOutputResult(null, null, "Well done, you've passed this task!");
  }
  return outputResult;
}

// low priority TODO: refactor & improve complexity of this function
// currently only allows for one npm install
export function validator(
  userStep: number,
  userCode: string,
  terminalInput: string,
  testData: IUserTest[][]
): IOutputResult {
  let outputResult: IOutputResult = {
    firstFailTask: null,
    errorMessage: null,
    errorSuggestion: null,
  };

  let latestInstall = -1;

  for (let taskIdx = 0; taskIdx < userStep; taskIdx++) {
    const taskTests = testData[taskIdx];
    console.log('outerloop index: ', taskIdx);

    for (let testIdx = 0; testIdx < taskTests.length; testIdx++) {
      console.log('innerloop index: ', testIdx);
      if (taskTests[testIdx].install) {
        latestInstall = testIdx;
      }
    }
  }

  for (let taskIdx = latestInstall + 1; taskIdx <= userStep; taskIdx++) {
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
