import Ember from 'ember'
const {Helper, get, inject} = Ember
import config from 'ember-get-config'

export default Helper.extend({

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),

  // == Functions =============================================================

  // Animations with a reverse transition need to animate the modal outlet
  // out, but the animation is provided from the now-destroyed modal itself.
  //
  // To avoid this, we store the animation from the modal (if provided) so that
  // the transition is available even when the modal is not.
  compute ([outlet, modal]) {
    if (config && get(config, 'frost-modal.no-animation')) {
      return
    }

    // Destroyed modal
    if (!modal) {
      // Get the stored animation from the outlet component
      return outlet.get('animationRules')
    }

    // New modal
    if (modal.animation) {
      // If the modal has animation, store it in the outlet component
      outlet.set('animationRules', modal.animation)
    } else {
      // Otherwise remove any previously stored animation
      outlet.set('animationRules', null)
    }
    // Return the current modal animation
    return outlet.get('animationRules')
  }

})
