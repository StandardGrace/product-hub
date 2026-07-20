# Product Hub

An Angular application built as coursework for my Full-Stack Web
Development Diploma (2026).

## What it demonstrates

- Component architecture (header, product list/card, data list/form)
  with parent-child data flow via `@Input()`
- Template iteration using Angular's `@for` block syntax
- `HttpClient` integration against the fake store API
- Client-side routing via the Angular Router
- Form handling in a dedicated form component

## Stack

Angular 21.2.15 · TypeScript · HTML · CSS

## Running it

    npm install
    ng serve

Then open http://localhost:4200.

## If I were extending it

- Flesh out the generated `.spec.ts` stubs into real unit tests -
  as a QA professional moving into development, untested code
  bothers me more than most
- Move the hardcoded API URL into environment configuration
- Add error and loading states around the HTTP calls
- Either use the SSR scaffold the CLI generated or strip it -
  currently it's along for the ride
- Connect HttpClient API to a real working database

## Screenshot

![Product Hub](./screenshot.png)