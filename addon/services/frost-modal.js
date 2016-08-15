import Ember from 'ember'
const { Service } = Ember

export default Service.extend({

  // == State properties ======================================================

  isActive: false,

  // == Functions =============================================================

  setState(modalName, isVisible) {
    this.set('isActive', isVisible)
  }

})
