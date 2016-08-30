import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  queryParams: [
    'isErrorVisible'
  ],

  isErrorVisible: false,

  actions: {
    phew () {
      this.set('isErrorVisible', false)
      this.get('notifications').addNotification({
        message: 'That was close...',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
