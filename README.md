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
