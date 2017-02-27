import Ember from 'ember'
const {A, Controller} = Ember
import {task, timeout} from 'ember-concurrency'

export default Controller.extend({
  queryParams: [
    'isModalVisible'
  ],

  bottles: A([]),
  isModalVisible: false,

  countBottles: task(function * () {
    yield timeout(300)
    const bottles = this.get('bottles')
    while (bottles.length < 99) {
      bottles.addObject(`Bottle ${bottles.length + 1}`)
      yield timeout(25)
    }
  }).drop(),

  actions: {
    stopCounting () {
      this.get('countBottles').cancelAll()
      this.set('isModalVisible', false)
      this.get('bottles').clear()
    },

    startCounting () {
      this.set('isModalVisible', true)
      this.get('countBottles').perform()
    }
  }
})
