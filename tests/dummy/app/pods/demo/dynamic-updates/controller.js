import Ember from 'ember'
const {A, Controller, Object: EmberObject} = Ember
import {task, timeout} from 'ember-concurrency'

export default Controller.extend({
  queryParams: [
    'isModalVisible'
  ],

  // BEGIN-SNIPPET dynamic-update
  incrememtors: A([]),
  isModalVisible: false,

  speedTask: task(function * () {
    const incrementors = this.get('incrememtors')

    while (incrementors.length < 30) {
      if (incrementors.length === 0 ||
          incrementors[incrementors.length - 1].value > 30) {
        incrementors.addObject(EmberObject.create({value: 0}))
      }

      for (let i = 0; i < incrementors.length; i++) {
        const incrementor = incrementors.objectAt(i)
        incrementor.set('value', incrementor.get('value') + 1)
      }

      yield timeout(30 - incrementors.length)
    }

    incrementors.addObject(EmberObject.create({
      value: '"...the need for speed!"'
    }))
  }).drop(),

  actions: {
    stopSpeeding () {
      this.get('speedTask').cancelAll()
      this.set('isModalVisible', false)
      this.get('incrememtors').clear()
    },

    startSpeeding () {
      this.set('isModalVisible', true)
      this.get('speedTask').perform()
    }
  }
  // END-SNIPPET
})
