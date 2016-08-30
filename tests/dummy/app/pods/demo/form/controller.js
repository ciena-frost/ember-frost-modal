import Ember from 'ember'
const {
  Controller
} = Ember

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

  actions: {
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
