import Ember from 'ember'
const {
  Helper,
  inject,
  observer
} = Ember

export default Helper.extend({

  // == Dependencies ==========================================================

  // BEGIN-SNIPPET frost-modal-service-inject
  modalService: inject.service('frost-modal'),
  // END-SNIPPET

  // == Events ================================================================

  onModalStateChange: observer('modalService.isActive', function () {
    this.recompute()
  }),

  // == Functions =============================================================

  compute () {
    // BEGIN-SNIPPET frost-modal-service-get
    const isActive = this.get('modalService.isActive')
    // END-SNIPPET
    return isActive
  }
})
