# To Do App
This was an initial foray into using and testing Angular. It is a very, very basic app that allows users to add and delete items from a todo list.

## Installation
* Fork the repo
* Run `npm install`
You may need to change the app name in bower.json and package.json

## Testing
This app uses Protractor for end-to-end testing and Karma for unit testing.

You must have http-server and webdriver-manager running for the tests to execute. Open individual terminal tabs and run `http-server` and `webdriver-manager start` in each from the /app directory.

To run the unit tests, use:
```
karma start test/karma.conf.js
```

To run the e2e tests, use:
```
protractor test/protractor.conf.js
```

## Usage
To use the app, either open `/app/index.html` in a browser or run `http-server` from the /app directory and use `localhost:8080`.
