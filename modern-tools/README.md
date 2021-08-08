## the Bundle

With the growth of Javascript programs, many other tools are developed
to help making javascript application faster, cleaner, compatiple with
older version of javascript (since we using ES6/Ecmascript2015 or newer).
All those tools come together as a 'bundle'. We will have a taste of few
popular one in this folder by building a simple NodeJS backend application

### Express

This is a popular framework to create nodejs application

### Babel

This module helps convert newer version of javascript to classic version

### ESLint

This module will help linting our code with some conventions and configs, so our
code are cleaned, less bugs, and looks great

### Mocha & Chai

These are 2 seperate packages but normally go together for testing in javascript

### Nyc

This package helps show the code coverage that our tests have on the actual application

### rimraf

This package simply do 'rm -rf' command from node

### nodemon

This package will automatically restart the node server
when there is changes, very useful in development

### Keynotes

In this project, there are many packages have been used, here are the explanation of their usage

1. @babel/cli, @babel/core: This is the shell executable script of Babel

2. @babel/node: this works exactly the same as node-cli except it will compile with babel presets before running

3. @babel/preset-env: smart preset package, so we don't need to specify exactly what version of javascript we are using

4. @babel/register: this is for mocha, so we can run the test that written in ES6

5. chai-http: this is for testing http request, this package will start a passed in server (see in the code) by running listen() and close it down once its finished

6. chai-things: this is the enhancement for chai, it's optional

7. when we put 'nyc --reporter=lcov' in front of the test script, we asked nyc to provide the report in the .lcov folder with a lot of cute format ^^

In this sample project, we have 2 routes, but test only 1. This is done on purpose.
Type:

> npm run test

then open the index.html file in .lcov folder to see how nyc works
