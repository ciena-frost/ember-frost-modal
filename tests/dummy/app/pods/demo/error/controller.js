import Ember from 'ember'
const {Controller, inject} = Ember
const {service} = inject

export default Controller.extend({
  notifications: service('notification-messages'),
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
