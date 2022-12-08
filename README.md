# Running the NodeJS - Serverless Application

## First Step (Pull Changes Github):

First, you need to pull the recent branches:

`git fetch --all`

then pull the recent changes,

`git pull --all`

## Second Step (NodeJS version):

Check if your **NodeJS** version is > 16.14.0

`nvm use 16.14` (example)

## Third Step (Change or Create branch):

To change to a branch:

`git checkout <branch_name>`

To create a new branch:

`git checkout -b <branch_name>`

## Fourth Step (install missing packages):

`npm install`

## Fifth Step (Configure DB):

`npx sequelize-cli db:drop`
`npx sequelize-cli db:create`
`npx sequelize-cli db:migrate`
`npx sequelize-cli db:seed:all`

## Sixth and last Step (run the app):

`npm start` (it may take a while ~ 2 minutes)

# Where is running?

localhost:3001
