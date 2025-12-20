# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository is a simple static front-end project consisting of a single HTML page (`index.html`), a stylesheet (`style.css`), and a small JavaScript file (`main.js`). There is no build system, framework, or backend; the page is intended to be opened directly in a browser.

`package.json` declares a single dependency (`bootstrap-icons`), but the current `index.html` uses inline SVG icons directly rather than importing from the package, so the dependency is not required for the page to render.

## Commands

All commands below are intended to be run from the project root (the directory containing `package.json`).

- **Install dependencies**
  - Use this if you need the `bootstrap-icons` package available (e.g., to switch from inline SVGs to icon imports):
    - `npm install`

- **Run / preview the site**
  - There is no configured dev server or build step; you can open `index.html` directly in a browser.
  - If you want to serve the site over HTTP during development, use any static file server (for example, `npx serve .` or an equivalent tool), but this is not codified in the repo.

- **Build, lint, and tests**
  - There are currently **no** npm scripts or configuration for building, linting, or running tests. Any such tooling would need to be added first (e.g., by defining `scripts` in `package.json`).

## Code Structure and Architecture

- **`index.html`**
  - Single-page layout with:
    - A top navigation bar (`<nav>`) containing text links (Home, Case Studies, Testimonials, Recent Work, Get in Touch).
    - A set of social icons rendered as inline SVGs (LinkedIn, Discord, Twitter/X) on the right side of the nav.
    - A main hero section (`<main>`) with a heading, short intro text, and a primary button.
    - A footer showing a "Worked with" label and placeholder company logo slots.
  - Currently, the HTML does **not** include a `<script>` tag to load `main.js`.

- **`style.css`**
  - Provides all visual styling for the page:
    - Global body styling (dark background, gray text, system font).
    - `nav` styling to create a horizontal bar with space-between layout between nav items and social icons.
    - Flexbox-based layout for `.nav-items` and `.social-icons`.
    - Basic layout rules for `main` (centering content) and button styling (green call-to-action button).
  - There is no CSS preprocessor or build step; styles are written directly as plain CSS.

- **`main.js`**
  - Implements a small localStorage-backed todo list:
    - Reads an array of tasks from `localStorage` (key: `"tasks"`), defaulting to an empty array.
    - Expects DOM elements with IDs `taskInput`, `addTaskBtn`, and `taskList` to exist.
    - `renderTasks()` rebuilds the list UI from the `tasks` array, applying a `done` CSS class to completed items and toggling completion on click.
    - `saveTasks()` persists the `tasks` array back to `localStorage`.
    - An event listener on `addTaskBtn` adds new tasks from `taskInput` and re-renders the list.
  - The current `index.html` does not define these expected elements, so this script is effectively unused until the markup is extended and the script is included via a `<script src="main.js"></script>` tag.

- **`node_modules/`**
  - Standard npm dependencies directory. The only declared dependency is `bootstrap-icons`; this directory can be safely ignored when reasoning about the app’s behavior.
