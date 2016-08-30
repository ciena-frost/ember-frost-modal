import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  queryParams: [
    'isWarnVisible'
  ],

  isWarnVisible: false,

  actions: {
    escape () {
      this.get('notifications').addNotification({
        message: 'Poor Zelda...',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
