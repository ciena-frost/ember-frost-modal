import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  notifications: Ember.inject.service('notification-messages'),
  queryParams: [
    'isDialogVisible',
    'tab'
  ],

  isDialogVisible: false,
  tab: 'notes',

  actions: {
    confirm () {
      this.get('notifications').addNotification({
        message: 'Affirmative',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
