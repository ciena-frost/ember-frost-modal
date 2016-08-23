import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: [
    'isConfirmVisible'
  ],

  isConfirmVisible: false,

  actions: {
    rejoice () {
      this.notifications.addNotification({
        message: 'Yay.',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
