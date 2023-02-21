# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Timer App Documentation

Introduction

The Timer App is a simple web application that allows users to set and run a timer with hours, minutes, and seconds. Users can increment or decrement the time using the provided buttons. The app also features a Start, Pause, and Reset button to control the timer.There is also presets to add or subtract 1 or 5 minutes directly to the timer.

App Features

The Timer App comes with the following features:

Set hours, minutes, and seconds using the provided buttons.
Increment or decrement the time using the provided buttons.

The hours will range from 0 to 23,
The minutes from 0 to 60 and
Seconds from 0 to 60.

Start, Pause, and Reset the timer using the corresponding buttons.

Visual feedback on the timer: the color of the timer changes from green to orange and orange to red as the time decreases.

Jog 5-minute feature allows to add or subtract 5 minutes to the current timer.
Jog 1-minute feature allows to add or subtract 1 minutes to the current timer

After counting down to zero the counter will start a negative countdown and when paused and then restarted the counter will be reset.
When the counter is in negative count if we press jod -5 minutes or -1minutes the counter will be reset to 0.

Code Structure

The Timer App consists of the following files:

src/App.js: Contains the main app component.

src/components/index.js: Contains the Timer component which handles different states and calls other components.

src/components/index.css:stores the styling for all the components.

src/Assets/Icons: this folder contains all the icon code in jsx format.

src/Components/TimerButtons/index.js: Contains all the Buttonscand handles its styles.

src/Components/TimeSet/index.js: contains the part of the timer which sets the time for the timer.

src/Components/TimePreview/index.js: contains the part of the timer which displays the timer that countdowns.

src/Components/Jog/index.js: contains the part which has the jog 5 and jog 1 presets.

src/index.js: Renders the App component to the DOM.

Methods
decrementValue(type): Decrements the value of the specified time type.
incrementValue(type): Increments the value of the specified time type.
formatTime(time): Converts the time to required format.
startTimer(): Starts the timer.
pauseTimer(): Pause the timer.
resetTimer(): Resets the timer.
incrementJog(n): Increments the timer by n.
decrementJog(n): Decrements the timer by n.

State
time: stores the current time in an object which contains values of hours,minutes,seconds and sign
timerColor: The current color of the timer is stored.
timerOn: A boolean value indicating whether the timer is active or not..
jogTracker: Boolean value to indicate whether jog preset is pressed
