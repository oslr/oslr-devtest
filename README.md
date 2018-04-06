# oslr-devtest

This app is a short test for potential Oslr developers.
The app is a basic Ember app, created with `ember new`. It uses Ember version 3.0.0.

Running the app (as outlined by the default Ember readme below) will show you an image of a wireframe sent to us by our UX team. It is a simple search page, where typing the name of a user in the search bar will filter a list of users.

We want you to build this page. There is a simple mocked-up API in the app, using Ember Mirage (http://www.ember-cli-mirage.com/) - requests to '/users' will return a list of 20 users as JSON, assuming you are using Ember's Model object.

Please don't worry about the page design - we are just looking for something that works. It should not take you too long. Do get in touch if you have any questions.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd oslr-devtest`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
