## Project Name
Product Hub

## Project Description
Product Hub is an Angular application built as coursework for my Full-Stack Web Development Diploma (2026). The page is a small dashboard made up of a header, a form for creating new entries, a live feed of entries pulled from a remote API, and a list of products. It uses standalone components, parent-to-child data flow with `@Input()`, Angular's `@if` and `@for` control flow syntax, template-driven forms, and `HttpClient` requests against the JSONPlaceholder test API. Known issues and next steps are listed in [TECHNICAL-NOTES.md](./TECHNICAL-NOTES.md).

## Technologies
- Angular 21
- TypeScript
- HTML
- CSS
- JSONPlaceholder API

## How to Run
1. Install [Node.js](https://nodejs.org), which includes npm.
2. Clone or download this repository and open a terminal in the project folder.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Open http://localhost:4200 in your browser.

An internet connection is required, since the app sends its requests to JSONPlaceholder.

## Features
- Header bar with the dashboard title
- "Create New Entry" form with two-way data binding and required-field validation; the submit button stays disabled until both fields are filled in and while a request is being sent
- Form submissions are sent as a POST request to JSONPlaceholder, followed by a success alert and a form reset (JSONPlaceholder simulates the save, so new entries are not actually stored)
- "Live Database Feed" that loads four posts from JSONPlaceholder with a GET request when the page opens, with a placeholder message shown until the data arrives
- "Available Items" product list that passes each product to a reusable product card component through `@Input()`; out-of-stock products are faded and labelled "Out of Stock"
- Standalone component architecture using Angular's built-in `@if` and `@for` blocks

## Author
Patrick Grace — [patrickmgrace.com](https://www.patrickmgrace.com/) — GitHub: [StandardGrace](https://github.com/StandardGrace)
