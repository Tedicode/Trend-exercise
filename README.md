## Setup:

### fork or clone this repo from:

https://github.com/Tedicode/Trend-exercise

### `npm install`

installs node dependencies

## To run the app in development mode:

From the project root directory, run:

### `npm start`

Starts up the server (to make API/resources available to our front end)

### `cd client`

navigates to the client side code

### `npm start`

runs a separate start script on front end (react-scripts, provided by create-react-app), to serve the app on port 3000

- Now visit [http://localhost:3000](http://localhost:3000)
- And enjoy hot reloading during development
- Note: The client side code can access the backend because we added to client/package.json a property "proxy" pointing to port 3001

## To run the app in production mode:

From the project root directory, run:

### `npm run build`

builds to the build folder (bundles client side code)

### `npm start`

starts up the server on localhost:3001

Now visit [http://localhost:3001](http://localhost:3001)

## Deploying:

#### Note: before you can deploy to heroku (using git), you must first:

- have an account with Heroku, and be a collaborator for this project
- install heroku CLI,
- login to heroku via CLI, and
- add remote repo, "heroku" locally for this project:
  ##### `heroku git:remote -a trend-exercise`

## To deploy:

From project root directory, push to heroku

### `git push Heroku main`
