import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  queryParams: [
    'isErrorVisible'
  ],

  isErrorVisible: false,

  actions: {
    phew () {
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
