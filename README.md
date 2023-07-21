# Panorbit_assignment

# Simple Landing Page and User Profile Page - README

## Introduction

This repository contains the code for a Simple Landing Page and a User Profile Page. The Simple Landing Page displays a table of users fetched from an external API, and the User Profile Page displays detailed information about a selected user along with a Google Maps integration to show the user's location. This README provides a detailed technical explanation of the code, the technologies used, and the reasons behind their selection.

## Technologies Used

### 1. HTML, CSS, and JavaScript

- HTML, CSS, and JavaScript are the core technologies used to build the front-end of both the Simple Landing Page and User Profile Page. HTML provides the structure of the pages, CSS is used for styling, and JavaScript adds interactivity and dynamic functionality.

### 2. Visual Studio Code (VS Code)

- VS Code is the chosen code editor for this project due to its lightweight nature, extensive support for HTML, CSS, and JavaScript, and availability of useful extensions, such as Live Server for quick local development server setup.

### 3. Live Server Extension

- The Live Server extension for VS Code is utilized to easily launch a local development server. It provides real-time updates to web pages as code changes are made, improving the development workflow and making it easier to preview changes instantly.

### 4. Google Maps API

- The User Profile Page utilizes the Google Maps API to display the user's location on a map. The Google Maps API is a widely-used mapping service that provides robust and customizable mapping functionality.

## Code Explanation

### 1. Simple Landing Page

- The Simple Landing Page fetches user data from the "https://panorbit.in" API using the Fetch API in JavaScript. The data is retrieved in JSON format and dynamically populates a table on the page with user profile pictures and names.

- When a user name in the table is clicked, the page redirects to the User Profile Page with the selected user's name as a query parameter.

### 2. User Profile Page

- The User Profile Page fetches user data using the Fetch API, just like the Simple Landing Page, but this time using the user's name passed as a query parameter.

- The fetched user data is then dynamically displayed on the page using JavaScript to set the content of various HTML elements.

- The User Profile Page also integrates the Google Maps API to show the user's location on a map. The latitude and longitude coordinates from the user data are used to create a map centered on the user's location. A marker is placed on the map to indicate the precise location.

- Additionally, the User Profile Page includes tab functionality to switch between different sections (Profile, Posts, Gallery, Todo), although the content for these sections is not fully implemented in this version.

## Why These Technologies?

- HTML, CSS, and JavaScript are widely-supported web technologies, making them ideal for building responsive and interactive web pages. They are easy to understand, maintain, and work well together.

- Visual Studio Code is chosen for its user-friendly interface, extensive language support, and a wide range of extensions that enhance productivity during development.

- The Live Server extension is used to improve the development workflow by providing a local development server with real-time updates, which speeds up the testing and debugging process.

- The Google Maps API is selected for its powerful mapping capabilities, allowing the User Profile Page to display the user's location with a familiar and interactive map interface.

## Conclusion

The Simple Landing Page and User Profile Page are designed using a combination of HTML, CSS, and JavaScript. The technologies were selected for their versatility, ease of use, and wide support within the web development community. The use of Visual Studio Code and the Live Server extension streamlines the development process, while the Google Maps API adds valuable functionality to the User Profile Page. With this technical stack, the projects offer an engaging and user-friendly experience.
