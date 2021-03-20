import React from 'react';

export default function Instructions(): JSX.Element {
  return (
    <div>
      <p>First things first, we need to install express and import it as a dependency</p>
      <ol>
        <li>To install express we recommend using npm - the command is npm install ‘express’</li>
        <li>
          When you have installed a dependency, you need to tell your file you want to use it. For
          this, you can go ahead and write…”const dependencyname = require(‘depedency’);”
        </li>
      </ol>
    </div>
  );
}
