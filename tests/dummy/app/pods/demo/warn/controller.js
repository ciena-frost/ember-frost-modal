import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: [
    'isWarnVisible',
  ],

  isWarnVisible: false,

  actions: {
    escape() {
      this.notifications.addNotification({
        message: 'Poor Zelda...',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
