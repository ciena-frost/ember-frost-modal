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

  compute ([outlet, modal]) {
    if (config && get(config, 'frost-modal.no-animation')) {
      return
    }

    if (!modal) {
      return outlet.get('animationRules')
    }

    if (modal.animation) {
      outlet.set('animationRules', modal.animation)
    } else {
      outlet.set('animationRules', null)
    }

    return outlet.get('animationRules')
  }
})
