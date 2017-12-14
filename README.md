# Show Tracker (Built with React and Redux)

A small application dedicated to tracking your progress in a TV box set or series. The application's front end is built using React and Redux. The small backend API is built using Express and the TMDB API.

Design is not a priority on this project yet. I am learning React and Redux but if you would like to contribute, that would be great.

### Installation

Show Brainer requires [Node.js](https://nodejs.org/) v6+ to run. 
For the application to work, you must register for an API key from [The Movie Database](https://tmdb.org) and add it to `config/config.js`

Open two terminal tabs and install the dependencies and devDependencies and start the server.

First Tab:
```sh
$ cd show-brainer
$ npm install -d
$ npm start
```
Second Tab:
```sh
$ cd show-brainer/client
$ npm install -d
$ npm start
```

A bug makes you have to run `npm install` in both the project root directory and inside the client directory. This will be fixed.
