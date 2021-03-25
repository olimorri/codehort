export const testData = [
  [
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*const\s+\w+/,
      variableRegex: /const/,
      message: 'Error: Expected const declaration',
      suggestion: 'Make sure you declare your app as a const variable',
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*const\s+(app|server)/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: "Error: No const variable named 'app' or 'server'",
      suggestion: "It's convention to name your server 'app'",
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*const\s+app\s*=\s*express\(\)/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: 'Error: Expected app to be initialised as express function invocation',
      suggestion: "Make sure you your app declaration looks like this: 'const app = express()'",
    },
  ],
  [
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*const\s+PORT/i,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: 'Error: No const variable named PORT',
      suggestion: "Have you named your const variable 'PORT'?",
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*const\s+(port|PORT)\s*=\s*300\d/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: 'Error: Expected PORT to be initialised as a number between 3000 and 3009',
      suggestion: 'Have you correctly set your port between 3000-3009?',
    },
  ],
  [
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*app\.listen\(/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: 'Error: Expected invocation of app.listen',
      suggestion: "Is your server listening with 'app.listen()'?",
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*app\.listen\((port|PORT)/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: "Error: Expected first argument of app.listen to be 'PORT'",
      suggestion: 'have you listed your PORT variable as the first argument of app.listen?',
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*app\.listen\((port|PORT),\s*\(\s*\)\s*=>\s*\{\s*console\.log\(.+\)\s*;?\s*\}\s*\)/,
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message:
        'Error: Expected second argument of app.listen to be a callback function with only a console log',
      suggestion: 'Read the error message for a hint',
    },
    {
      terminalRegex: /\s*node\s+(index|index\.js)\s*$/,
      regex: /\s*app\.listen\((port|PORT),\s*\(\s*\)\s*=>\s*\{\s*console\.log\(.+http:\/\/localhost:\$\{\s*(port|PORT)\s*\}.+\)\s*;?\s*\}\s*\)/, // how can we match a backtick?
      variableRegex: /(?<=\s*const\s+)(app|server)/,
      message: 'Error: Expected reference to correct port',
      suggestion: "make sure your console log includes 'http://localhost:${PORT}'",
    },
  ],
];
