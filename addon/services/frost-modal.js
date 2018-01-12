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
  noBlur: false,

  // == Functions =============================================================

  setState (modalName, isVisible, noBlur) {
    scheduleOnce('sync', this, function () {
      this.setProperties({
        isActive: isVisible,
        noBlur
      })
    })
  }

})
