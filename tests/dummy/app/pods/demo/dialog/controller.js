import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
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
