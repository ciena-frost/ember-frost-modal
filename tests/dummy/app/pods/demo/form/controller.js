import Ember from 'ember'
const {Controller, inject} = Ember
const {service} = inject
import {task, timeout} from 'ember-concurrency'

export default Controller.extend({
  notifications: service('notification-messages'),
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

    info () {
      window.alert('OMG!')
    },

    simpleBunsenChange (formValue) {
      this.set('simpleBunsenValue', formValue)
    },

    notifyClearAndClose () {
      this.get('notifications').addNotification({
        message: JSON.stringify(this.get('simpleBunsenValue'), null, 2),
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
      this.set('simpleBunsenValue', {})
      this.send('closeForm')
    }
  }
})
