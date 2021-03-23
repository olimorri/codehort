const { testData } = require('./test-data');

const outputResult = {
  firstFailStep: -1,
  errorMessage: 'message placeholder',
  errorSuggestion: 'suggestion placeholder',
};

function test(stepIdx, testIdx, userCode) {
  if (!testData[stepIdx][testIdx].regex.test(userCode)) {
    outputResult.firstFailStep = stepIdx;
    outputResult.errorMessage = testData[stepIdx][testIdx].message;
    outputResult.errorSuggestion = testData[stepIdx][testIdx].suggestion;
  }
}

function tester(lessonStep, userCode) {
  // O(n^2) - quadratic complexity
  for (let stepIdx = 0; stepIdx <= lessonStep; stepIdx++) {
    const stepArray = testData[stepIdx];

    for (let testIdx = 0; testIdx < stepArray.length; testIdx++) {
      test(stepIdx, testIdx, userCode);
      if (outputResult.firstFailStep !== -1) return outputResult; // short-circuits
    }
  }
  return outputResult;
}

module.exports = { tester };
