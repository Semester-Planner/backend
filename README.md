# The Semester Planner

Targeting CODE students, the Semester Planner aims to help students manage their time regarding the requirements for the modules they set out to pass that semester and avoid failing for reasons like forgetting about scheduling a mandatory check-in on time or submitting a topic proposal. The Express web app, in connection with our PostgreSQL relational database allows students to visualize all their requirements for an overview of the semester. Once a user adds their modules, the respective requirements are automatically present on one timeline where they can then set their own due dates and take notes within these tasks (called Entries). With the use of Google OAuth and passportJS, students can conveniently log in with their code.berlin email addresses without the need to sign up.

Table of Content:

1. [Prerequisites](#prerequisites)
1. [Setup](#setup)
1. [Entity Relationship Model](#entity-relationship-model)
1. [Usage](#usage)
1. [Tests](#test)
1. [Credits](#credits)
1. [License](#license)

## Prerequisites

1. Setup local database with [PostgreSQL](https://www.postgresql.org/) (v14.5)
2. Install [Node.js](https://nodejs.org/en/)
3. Download/Clone both git repositories: frontend & backend

## Setup

#### 1. Navigate to /frontend

#### 2. Install all frontend dependencies

```
npm i
```

#### 3. Navigate to /backend

#### 4. Install all backend dependencies

```
npm i
```

#### 5. Setup your environment

- create a .env file within /backend
- add and save all the variables found in .env.example
  - see [Obtain OAuth 2.0 credentials from the Google API Console](https://developers.google.com/identity/protocols/oauth2) for GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

#### 6. Run and setup your database

```
npm run setup:db
```

#### 7. Finally run the servers

```
npm run start
```

## Entity Relationship Model

Add image of ERM (syntax example:)
![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

## Usage

## Tests

## Credits

## License

MIT License

Copyright (c) 2022 Semester-Planner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
