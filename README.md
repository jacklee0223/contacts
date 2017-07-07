# JS-Challenge

### Purpose
The purpose of this exercise is for you to demonstrate your ability to create a performant React application that both matches a mock (shown above) in features and functionality. We use this challenge to better understand your coding abilities and determine if you would be a good fit for an in-person interview.

### What we're looking for
- Proficiency in leveraging existing technologies to create a responsive application.
- Ability to use CSS, HTML, and Javascript to match a mock design.
- Logical code architecture and choice of frameworks (within the context of React).
- Comprehensive coverage of use cases.

### Challenge
Create a React app that takes the user input with a form and then displays the results in a table. It should meet the following requirements.
- Clicking the +Add button should open a modal window.
- The form should be filled out and submitted from the modal window.
- Upon submission, the table should update itself without needing to reload the page.
- The form & table should have the following fields:
  - `First Name`
  - `Last Name  `
  - `Date of Birth`
  - `Phone Number`
  - `Address`
  - `Notes`

##### Application Mock
![Application Mock](/assets/ContactsKeeper-01.png)

##### Modal Mock
![Modal Mock](/assets/ContactsKeeper-02.png)

### Bonus Points
These are not required and we do not expect someone to do all of the below, but would be great additions if time permits.
- Unit Tests
- Mobile Design
- Filter the Table Results from the Search
- Add Sortable Columns to the table
- Abide by [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- Prefer [Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

### Other
To begin this challenge, please clone this repo and create a Pull Request into the repo when you are finished. Please add details for running your app to the `Running My App (README.md)` section below.

### FAQ's
Not all of the images & icons were included, what should I do?
- Any missing assets can be improvised.

The challenge requirements seem vague, am I missing something?
- This prompt is designed to be open-ended, so feel free to be creative in the areas that lack strict guidelines.

# Running My App (README.md)
### Clone Repo from jeongminlee branch
SSH:
`git clone -b jeongminlee git@github.com:ONEHOPEWINE/js-challenge.git`
HTTPS:
`git clone -b jeongminlee https://github.com/ONEHOPEWINE/js-challenge.git`

### From terminal, CD into the js-challenge directory
`cd js-challenge`

### Install NPM Packages
Make sure Node and NPM is installed on your machine, and run

`npm install`

### Compile Code
`npm run build`

### Automated Compile Code
This will initiate build automatically whenever you save changes within src and public

`npm run build:watch`

### Start Local Dev Server
`npm run start`
and the app will be automatically loaded on `http://localhost:3000`

### Production URL
https://jeongminlee-contacts.netlify.com/

### Stack
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Serverless Framework](https://serverless.com/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [Netlify](https://www.netlify.com/)

This project uses [Glyphicons](http://glyphicons.com/)
