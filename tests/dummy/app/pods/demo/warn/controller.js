import Ember from 'ember'
const {Controller, inject} = Ember
const {service} = inject

export default Controller.extend({
  notifications: service('notification-messages'),
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
