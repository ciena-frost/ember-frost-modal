import Ember from 'ember'
const {Controller, inject} = Ember
const {service} = inject

export default Controller.extend({
  notifications: service('notification-messages'),
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
