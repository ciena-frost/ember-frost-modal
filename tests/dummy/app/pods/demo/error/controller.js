import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: [
    'isErrorVisible',
  ],

  isErrorVisible: false,

  actions: {
    phew() {
      this.set('isErrorVisible', false)
      this.notifications.addNotification({
        message: 'That was close...',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
