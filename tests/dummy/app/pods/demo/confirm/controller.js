import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  queryParams: [
    'isConfirmVisible'
  ],

  isConfirmVisible: false,

  actions: {
    rejoice () {
      this.get('notifications').addNotification({
        message: 'Yay.',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
