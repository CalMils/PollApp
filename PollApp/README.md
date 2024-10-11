# Running the PollApp:

    - Using cmd or a terminal in your code editor cd to the PollApp root file.

    - Then first cd to the folder named "backend" and run the command "npm install" and then after that has finished run "npm start". This should start up and return the message "Backend is running on http://localhost:4000".

    - Next cd back to the root and then into the "frontend" folder and run the command "npm install" and then after that has finished run "npm start" again. This should start up and return the message  teling you it is running on   "http://localhost:3000" and usually opens a browser to that url automatically.

# List of web pages:

    - "http://localhost:3000/ActivePoll"
    - "http://localhost:3000/" takes you to the home page where you can navigate to viewing all polls, create new polls and view votes made for polls
    - "http://localhost:3000/Polls" shows you all the polls and let you vote on them
    - "http://localhost:3000/CreatePoll" displays a form whcih you can use to make new polls
    - "http://localhost:3000/Votes" displays all the votes made in table format

# List of endpoints:

    - "http://localhost:4000/polls" returns all polls as json
    - "http://localhost:4000/votes" returns all votes as json
    - "http://localhost:4000/savePoll" takes a poll as a json object and updates the poll
    - "http://localhost:4000/createVote" takes a vote as a json object and creates it
    - "http://localhost:4000/createPoll" takes a poll as a json object and creates the poll
----------------------------------------------------------------------------------------------------------------------------------------
CREATE REACT APP INFO

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
