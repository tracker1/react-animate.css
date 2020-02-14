# *** WARNING - IN DEVELOPMENT - USE AT YOUR OWN RISK ***

This package is under initial development, it will be bumped to 1.0.0 when ready for use. 0.0.x version should be avoided and are largely meant for CI/CD integration.

This will also be my first library written in TypeScript and not straight JavaScript, so there will be some learning involved.

# @tracker1/react-animate.css

React wrapper for animate.css written in TypeScript with minimal runtime dependencies.

## Installation

Install with npm:
```bash
npm i @tracker1/react-animate.css
```

or yarn:
```bash
yarn add @tracker1/react-animate.css
```

You will also need to add a css reference to either [animate.css](https://www.npmjs.com/package/animate.css) directly or this project via `@tracker1/react-animated-css/index.min.css`.  This project will includes a copy at build time, it may be out of date with the upstream project (pull requests welcome).

### Dependencies

* `react@(>=16.8.0 <18.0.0)` - I am assuming given React's history that they won't break anything in use until at least version 18, and 16.8 is the first release with hooks.

## Usage

TODO:

## Motivation

When I found out about [animate.css](https://www.npmjs.com/package/animate.css) I was really excited and curious if anyone had written a wrapper.  I was happy to find two wrappers.  However, I was not happy to find that both of them had dependencies that I felt should not be needed.  I since set out to create an abstraction with close to zero dependencies.

## License

MIT License
