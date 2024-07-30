# Note Taker

## Description

A simple web application for taking and managing notes. Users can add, view, and delete notes. The application is built with HTML, CSS, and JavaScript, and it uses local storage to persist notes between sessions. Additionally, a loading spinner is displayed in the middle of the screen when actions are performed, providing a better user experience.

## Features

- Add new notes with a title and content.
- Display a list of notes with truncated content (if content exceeds 15 words).
- View the full content of a note in a detailed view.
- Delete notes.
- Notes are saved in local storage.
- Loading spinner displayed for a brief moment when actions are performed.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript

- Code Overview
HTML
The main structure of the application is in the index.html file. It includes forms for adding notes and containers for displaying notes.

CSS
Styling is handled using Bootstrap and custom CSS in the style.css file.

JavaScript
The main functionality is implemented in the main.js file. This includes:

Adding, displaying, and deleting notes.
Managing local storage.
Handling the display of the loading spinner.
Local Storage
Notes are stored in the browser's local storage, ensuring they persist between sessions.
