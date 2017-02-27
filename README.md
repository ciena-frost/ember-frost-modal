[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-modal.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-modal

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-modal.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-modal

[npm-img]: https://img.shields.io/npm/v/ember-frost-modal.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-modal

[ember-observer-badge]: http://emberobserver.com/badges/ember-frost-modal.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-frost-modal

[ember-img]: https://img.shields.io/badge/ember-2.3+-orange.svg "Ember 2.3+"

[bithound-img]: https://www.bithound.io/github/ciena-frost/ember-frost-modal/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-frost/ember-frost-modal

# ember-frost-modal
###### Dependencies

![Ember][ember-img]
[![NPM][npm-img]][npm-url]

###### Health

[![Travis][ci-img]][ci-url]
[![Coveralls][cov-img]][cov-url]

###### Security

[![bitHound][bithound-img]][bithound-url]

###### Ember Observer score
[![EmberObserver][ember-observer-badge]][ember-observer-badge-url]

## Installation
```
ember install ember-frost-modal
```

## API and Examples
Detailed API and example usage can be found in the sample application in `tests/dummy`, which is also running at http://ciena-frost.github.io/ember-frost-modal

### Ember-elsewhere

This addon uses the [ember-elsewhere](https://github.com/ef4/ember-elsewhere) to manage the modals, to
lift them outside the normal route hiearchy.

### ember-perfectscroll effects (TODO effects based off perfectscroll events, but not from perfectscroll)

This gives you styling of header/footer when content is scrolled underneath either element

Styling includes: box shadow plus slight transparency in header/footer to reveal content underneath
For more documentation on ember-perfectscroll:  [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)

## Testing with ember-hook
This addon has been optimized for use with [ember-hook](https://github.com/Ticketfly/ember-hook). You
can set a `hook` name on your modal template. This will allow you to access the internal modal content
for testing.
### Available hooks (TODO move to documentation)
* Modal dialog title - `<hook-name>-title`
* Modal dialog header icon - `<hook-name>-icon`
* Modal dialog summary div - `<hook-name>-summary`
* Modal dialog content div - `<hook-name>-content`
* Modal dialog cancel button - `<hook-name>-cancel`
* Modal dialog confirm button - `<hook-name>-confirm`
* Modal dialog action links - `<hook-name>-link-<index>`

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-modal.git
cd ember-frost-modal
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-modal/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.


### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
