import Ember from 'ember'
const {Controller} = Ember
import {task, timeout} from 'ember-concurrency'

export default Controller.extend({
  queryParams: [
    'isInfoVisible'
  ],

  boringConfirm: 'Ok',
  boringSummary: 'I just thought you should know',
  isInfoVisible: false,

  excitingSummary: task(function * () {
    yield timeout(4000)
    this.set('boringSummary', '...or am I?')
    yield timeout(2000)
    this.set('boringConfirm', 'Yup, still boring...')
  }).drop(),

  actions: {
    closeInfo () {
      this.set('isInfoVisible', false)
      this.get('excitingSummary').cancelAll()
      this.set('boringSummary', 'I just thought you should know')
      this.set('boringConfirm', 'Ok')
    },

    openInfo () {
      this.set('isInfoVisible', true)
      this.get('excitingSummary').perform()
    }
  }
})
