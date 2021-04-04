![><](https://github.com/olimorri/codehort/blob/olimorri-patch-1/client/src/assets/codehort-logo.jpg)

Codehort is an e-learning platform that makes complex software engineering topics approachable and easy to understand.

## Features

Start your first quest now and learn to build an express server from scratch. With Codehort, you'll be guided through the process and have your code evaluated at each step. We felt it was important to mimic the real-world development environment, so each lesson comes complete with it's own code editor and terminal.

After completing your lesson, claim your trophy and be sure to check out the other lessons that are coming soon! Need to refresh your knowledge? No problem, all of your code will be kept in your code editor and available whenever you need it.

[Try Codehort now!](https://codehort-client.herokuapp.com/)


## Contribute

#### Codehort is an open-source platform and we're always looking to add more content. If you've got an idea for a new lesson, or a topic you like us to cover, we'd love to hear from you! 

To submit a lesson, please create a pull request with the following information:

- Topic: what you want to cover
- Steps: how you'll break this topic down into smaller steps
- Tests: what you'll test at each step
- Hints: a little hint for each step, just in case

Once we receive your PR the team will review your submission and get in touch ASAP.

## Tech Stack

### Front end

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)

### Back end

- [NestJs](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/master/)

## Getting Started

### Get the repo

`git clone https://github.com/olimorri/codehort.git`

### Navigate to server - from root

`cd server/`

### Install dependencies

`npm install`

### Setup your ENV

`touch .env` and enter the environment variables outlined in `server/src/database/database.config.ts`

### Run server

`npm run start`

### Navigate to client - from root

`cd client/`

### Install dependencies

`npm install`

### Run client

`npm run start`
