testData = [
  [
    {
      regex: /\n\s*const \w+/,
      message: 'Error: Expected const declaration',
      suggestion: 'Make sure you declare your app as a const variable',
    },
    {
      regex: /\n\s*const (app|server)/,
      message: "Error: No const variable named 'app' or 'server'",
      suggestion: "It's convention to name your server 'app'",
    },
    {
      regex: /\n\s*const app ?= ?express()/,
      message: 'Error: Expected app to be initialised as express function invocation',
      suggestion: "Make sure you your app declaration looks like this: 'const app = express()'",
    },
  ],
  [
    {
      regex: /\n\s*const PORT/i,
      message: 'Error: No const variable named PORT',
      suggestion: "Have you named your const variable 'PORT'?",
    },
    {
      regex: /\n\s*const (port|PORT) ?= ?300\d/,
      message: 'Error: Expected PORT to be initialised as a number between 3000 and 3009',
      suggestion: 'Have you correctly set your port between 3000-3009?',
    },
  ],
  [
    {
      regex: /\n\s*app\.listen\(/,
      message: 'Error: Expected invocation of app.listen',
      suggestion: "Is your server listening with 'app.listen()'?",
    },
    {
      regex: /\n\s*app\.listen\((port|PORT)/,
      message: "Error: Expected first argument of app.listen to be 'PORT'",
      suggestion: 'have you listed your PORT variable as the first argument of app.listen?',
    },
    {
      regex: /\n\s*app\.listen\((port|PORT), ?\(\) ?=> ?\{\s*console\.log\(.+\)\s*;?\s*\}\s*\)/,
      message:
        'Error: Expected second argument of app.listen to be a callback function with only a console log',
      suggestion: 'Read the error message for a hint',
    },
    {
      regex: /\n\s*app\.listen\((port|PORT), ?\(\) ?=> ?\{\s*console\.log\(.+http:\/\/localhost:\$\{\s*(port|PORT)\s*\}.+\)\s*;?\s*\}\s*\)/,
      message: 'Error: Expected reference to correct port',
      suggestion: "make sure your console log includes 'http://localhost:${PORT}'",
    },
  ],
];

module.exports = { testData };