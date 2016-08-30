import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  queryParams: [
    'isWarnVisible'
  ],

  isWarnVisible: false,

  actions: {
    escape () {
      this.notifications.addNotification({
        message: 'Poor Zelda...',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
