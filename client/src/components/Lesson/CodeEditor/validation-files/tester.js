const { testData } = require('./test-data');

const outputResult = {
  firstFailTask: -1, // this signals a pass for the current task
  errorMessage: 'message placeholder',
  errorSuggestion: 'suggestion placeholder',
};

function test(taskIdx, testIdx, userCode, terminalCommand) {
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

function tester(lessonTask, userCode, terminalCommand) {
  // O(n^2) - quadratic complexity
  for (let taskIdx = 0; taskIdx <= lessonTask; taskIdx++) {
    const taskArray = testData[taskIdx];

    for (let testIdx = 0; testIdx < taskArray.length; testIdx++) {
      test(taskIdx, testIdx, userCode, terminalCommand);
      if (outputResult.firstFailTask !== -1) return outputResult; // short-circuits
    }
  }
  return outputResult;
}

module.exports = { tester };
