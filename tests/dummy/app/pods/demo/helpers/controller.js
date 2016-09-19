import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
  importSnippet: "import modalUtils from '<name-of-app>/tests/helpers/ember-frost-modal'",
  methodImportSnippet: "import {expectModalWithState} from '<name-of-app>/tests/helpers/ember-frost-modal'"
})
