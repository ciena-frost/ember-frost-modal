import Ember from 'ember'
import { task, timeout } from 'ember-concurrency'

export default Ember.Controller.extend({
  activeModal: null,
  selectedDemo: 'overview',

  line: 0,
  lines: Ember.A([
    'All by myself'
  ]),
  isUserModalVisible: false,

  // linesTask: task(function * () {
  //   yield timeout(10000)
  //   while (this.line < 100) {
  //     this.get('lines').addObject(`line ${this.line}`)
  //     this.incrementProperty('line')
  //     yield timeout(25)
  //   }
  // }).drop(),

  // init () {
  //   this.get('linesTask').perform()
  // },

  actions: {
    activateModal (modalName) {
      this.set('activeModal', modalName)
    },

    showDemo (demo) {
      this.set('selectedDemo', demo)
      this.toggleProperty('changedDemo')
    }
  }
})
