This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is a small GIF fetcher app I worked on to practice the use of custom hooks on React.

I use two different components (one fetches a random gif and the other one fetches a gif based on a user's word). 
Both components were first implemented using a combination of useState and useEffect hooks. Being so similar those components ended up with a lot of duplicated code and so I implemented a common custom hook called useGif.

This hook calls the api with and without a tag (depending on the argument passed) and returns an array with two values: a gif url and a function to call the api. This way you can replicate what the useState hook offers: a value variable and a function that changes the value of the first variable. 

## Dependencies and API

I have used Axios for the http requests (unlike fetch native method, it allows to work directly with JSON responses without having to transform).
The app calls the [Giphy Developers][https://developers.giphy.com/] api.

## Instalation
#### `npm install`

## .env
Add a .env file with your personal api_key.

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
