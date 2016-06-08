[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-modal.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-modal

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-modal.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-modal

[npm-img]: https://img.shields.io/npm/v/ember-frost-modal.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-modal

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-modal

 * [Installation](#installation)
 * [API](#api)
 * [Examples](#examples)
 * [Development](#development)

## Installation
```
ember install ember-frost-modal
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `modalName` | `string` | <name> | Optional name for the modal |
| `modalClass` | `string` | <class-name> | Optional class to add custom styles to the modal |
| `confirm` | `Function` | <action-name> | Optional callback triggered if confirm button is used |
| `onOpen` | `Function` | <action-name> | Optional callback triggered after the modal opens |
| `onClose` | `Function` | <action-name> | Optional callback triggered after the modal closes |

## Slots API
Using [ember-block-slots](https://github.com/ciena-blueplanet/ember-block-slots), this generic modal dialog can be wrapped inside other more complex modal components. This basic modal will provide a header, scrollable content area and footer with actions. The required slots are `target` and `cancel`, to provide a way to launch and close the modal dialog respectively.

## Examples
```handlebars
{{#frost-modal
  confirm=(action 'confirmHandler') as |slot|}}
  {{#block-slot slot 'target'}}
    {{frost-button
      priority="primary"
      size="medium"
      text='Test basic dialog'
    }}
  {{/block-slot}}
  {{#block-slot slot 'header'}}
    <div class="primary-title">Test title</div>
  {{/block-slot}}
  {{#block-slot slot 'body'}}
    <div class="custom-body">
      <div>Test Information block</div>
    </div>
  {{/block-slot}}
  {{#block-slot slot 'cancel'}}
    {{frost-button
      autofocus=true
      size='medium'
      priority='tertiary'
      text='Cancel'
    }}
  {{/block-slot}}
  {{#block-slot slot 'confirm'}}
    {{frost-button
      size='medium'
      priority='primary'
      text='Confirm'
    }}
  {{/block-slot}}
{{/frost-modal}}
```

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
