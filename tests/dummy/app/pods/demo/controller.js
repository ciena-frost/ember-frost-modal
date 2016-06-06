import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    confirmHandler: function () {
      this.notifications.addNotification({
        message: 'Confirmed',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
