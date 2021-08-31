## Express Node.js Note Taker app

## Description

The note taker app alllows a user to enter a note and save it for a later time. Additionally, the app allows users to delete any saved note the user not longer needs. This applicatio connects to the back end using express.js and connects to the front end using heroku. In order to make sure the notes are unique, the application uses UUID to assign unique numbers to each note. To manage the different node modules I used nodemon.

## Live URL
    
    https://calm-meadow-83946.herokuapp.com/notes

## Installation

Within the server.js file, open a integrated terminal to install node.js. Then in the same command line run npm init to start your package.json file. Fill out the prompts accordingly. Then run npm i to get your node modules. Ensure you have create a .gitignore file with node_modules within the document. 

Connecting to heroku. 
Check the status of your git repo. run 'git status'
If you have not initialized your git repo you can do so with the 'git init' Once your git repo is working you need to put the PORT environment within the server.js file

const port = process.env.PORT || 3001

Let's create the heroku app now.
    run 'heroku create' in your server.js terminal
Verify the remote heroku URL was added. 
    'git remote -v'
This should show you the heroku links alongside the git repo links. 

Now let's deploy the app

run 'git add -A'  
    'git commuit -m "pushing to heroku'
    'git push heroku main'

You should see the application starting within the terminal.

⁇⁇ For more information on linking your heroku app visit https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide

## link to GitHub repo
https://github.com/hlbrown/note-taker

