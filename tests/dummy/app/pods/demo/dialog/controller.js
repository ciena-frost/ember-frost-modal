import Ember from 'ember'
const {Controller, inject} = Ember
const {service} = inject

export default Controller.extend({
  notifications: service('notification-messages'),
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
