import Ember from 'ember'
const {
  Controller
} = Ember
import {
  task,
  timeout
} from 'ember-concurrency'

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  queryParams: [
    'isFormVisible'
  ],

  isFormVisible: false,

  simpleBunsenModel: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      alias: {
        type: 'string',
        title: 'Nickname'
      },
      onlyChild: {
        type: 'boolean'
      },
      age: {
        type: 'number',
        title: 'Age'
      }
    },
    required: ['lastName']
  },

  simpleBunsenValue: {},

  isSomethingReady: false,
  doSomething: task(function * () {
    yield timeout(4000)
    this.set('isSomethingReady', true)
  }).drop(),

  actions: {
    closeForm () {
      this.set('isFormVisible', false)
      this.get('doSomething').cancelAll()
      this.set('isSomethingReady', false)
    },

    openForm () {
      this.set('isFormVisible', true)
      this.get('doSomething').perform()
    },

    simpleBunsenChange (formValue) {
      this.set('simpleBunsenValue', formValue)
    },

    notifyAndClear () {
      this.get('notifications').addNotification({
        message: JSON.stringify(this.get('simpleBunsenValue'), null, 2),
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
      this.set('simpleBunsenValue', {})
    }
  }
})
