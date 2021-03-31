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

export function validator(
  stepsCompleted: number,
  userCode: string,
  terminalInput: string,
  testData: IUserTest[][]
): IOutputResult {
  let outputResult: IOutputResult = {
    firstFailTask: null,
    errorMessage: null,
    errorSuggestion: null,
  };

  let latestInstallIdx = -1;

  for (let taskIdx = 0; taskIdx < stepsCompleted; taskIdx++) {
    const taskTests = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskTests.length; testIdx++) {
      if (taskTests[testIdx].install) {
        latestInstallIdx = taskIdx;
      }
    }
  }

  for (let taskIdx = latestInstallIdx + 1; taskIdx <= stepsCompleted; taskIdx++) {
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
