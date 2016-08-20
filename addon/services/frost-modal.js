import Ember from 'ember'
const {
  Service,
  run: {
    scheduleOnce
  }
 } = Ember

export default Service.extend({

  // == State properties ======================================================

  isActive: false,

  // == Functions =============================================================

  setState (modalName, isVisible) {
    scheduleOnce('sync', this, function() {
      this.set('isActive', isVisible)
    })
  }

})
