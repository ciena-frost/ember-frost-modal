import Ember from 'ember'

export default Ember.Controller.extend({
  queryParams: [
    'isDialogVisible',
    'tab'
  ],

  isDialogVisible: false,
  tab: 'notes',

  actions: {
    confirm () {
      this.notifications.addNotification({
        message: 'Affirmative',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
