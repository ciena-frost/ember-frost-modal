import config from 'ember-get-config'
import Ember from 'ember'
const {
  Helper,
  get,
  inject
} = Ember

export default Helper.extend({

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),

  // == Functions =============================================================

  compute([outlet, rules]) {
    if (config && get(config, 'frost-modal.no-animation')) {
      return
    }

    if (rules) {
      outlet.set('animationRules', rules)
    }
    return outlet.get('animationRules')
  }
})
