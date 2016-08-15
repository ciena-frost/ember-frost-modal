import Ember from 'ember'
const {
  Helper,
  inject,
  observer
} = Ember

export default Helper.extend({

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),

  // == Events ================================================================

  onModalStateChange: observer('modalService.isActive', function() {
    this.recompute()
  }),

  // == Functions =============================================================

  compute() {
    return this.get('modalService.isActive')
  }
})
