//import { testData } from './test-data';

interface IOutputResult {
  firstFailTask: number | null;
  errorMessage: string | null;
  errorSuggestion: string | null;
}

interface ITestCase {
  install: boolean;
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
  testCase: any,
  userCode: string,
  terminalInput: string
) {
  //Logic to test if we have the necessary regexes and if so,
  //to convert the string to a useable regex expression
  let testCaseRegex: any = null;
  let testCaseTerminalRegex: any = null;

  if (testCase.regex) {
    testCaseRegex = new RegExp(testCase.regex);
  }
  if (testCase.terminalRegex) {
    testCaseTerminalRegex = new RegExp(testCase.regex);
  }

  if (testCaseTerminalRegex !== null && !testCaseTerminalRegex.test(terminalInput)) {
    outputResult = updateOutputResult(
      taskIdx,
      `Error: command not correct: ${terminalInput}`,
      `Are you sure this is the right terminal command?`
    );
  } else if (!testCaseRegex.test(userCode)) {
    outputResult = updateOutputResult(taskIdx, testCase.message, testCase.suggestion);
  } else {
    outputResult = updateOutputResult(null, null, "Well done, you've passed the test!");
  }
  return outputResult;
}

// low priority TODO: refactor & improve complexity of this function
// currently only allows for one npm install
export function validator(
  userStep: number,
  userCode: string,
  terminalInput: string,
  testData: any //TODO: change this type once understood
): IOutputResult {
  let outputResult: IOutputResult = {
    firstFailTask: null,
    errorMessage: null,
    errorSuggestion: null,
  };

  console.log(testData);

  let latestInstall = 0;

  for (let taskIdx = 0; taskIdx < userStep; taskIdx++) {
    const taskTests = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskTests.length; testIdx++) {
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
