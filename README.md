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

### Ember-remodal

This addon uses the [ember-remodal](http://sethbrasile.github.io/ember-remodal/) service as a base for the modal behavior.

### Slots API

Using [ember-block-slots](https://github.com/ciena-blueplanet/ember-block-slots), this generic modal dialog can be wrapped inside other more complex modal components. This basic modal will provide a header, scrollable content area and footer with actions. The required slots are `target` and `footer`, to provide a way to launch and close the modal dialog respectively.

### Footer controls block

The `footer` block can yield a `cancel`, `confirm` or generic button type. The `cancel` button is internally hooked up to close the dialog.
The button text can be customized using the `text` attribute. The `cancel` button text defaults to `Cancel`. The `confirm` button text defaults to `Confirm`.
The `confirm` button is a primary button that takes a `onConfirm` action handler to allow the consumer to perform actions on confirmation, eg saving a record, and it automatically closes the dialog.
If you require another custom button, you can use the generic button type. To set an action handler on that button, set the attr `onActionClick`. All button text, size and priority can be overridden.

### ember-perfectscroll effects

This gives you styling of header/footer when content is scrolled underneath either element

Styling includes: box shadow plus slight transparency in header/footer to reveal content underneath
For more documentation on ember-perfectscroll:  [perfect-scrollbar](https://github.com/noraesae/perfect-scrollbar)

## Examples
```handlebars
frost-modal testbed
{{#frost-modal
  modalName='testModal' as |slot|}}
  {{#block-slot slot 'target'}}
    {{frost-button
      priority="primary"
      size="medium"
      text='Test basic dialog'
    }}
  {{/block-slot}}
  {{#block-slot slot 'header'}}
    <div class="primary-title">TEST TITLE</div>
  {{/block-slot}}
  {{#block-slot slot 'body'}}
    <div class="custom-body">
      <div>Test Information block</div>
      <div>Test Information block</div>
    </div>
  {{/block-slot}}
  {{#block-slot slot 'footer' as |controls|}}
    {{controls.cancel}}
    {{controls.button
      text='Custom action'
      onClick=(action 'myCustomAction')}}
    {{controls.confirm
      onConfirm=(action 'confirmHandler')
      text='Confirm it!'}}
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
