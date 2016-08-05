import Ember from 'ember'
const {
  Helper
} = Ember

/**
 * Retain animation rules from the previous modal
 *
 * This is necessary because the frost-modal-outlet modal parameter is null
 * when the trigger condition is no longer true, but we still need access to
 * the reverse rule to animate the modal out
 */
export function retainRules([outlet, rules]) {
  if (rules) {
    outlet.set('animationRules', rules)
  }
  return outlet.get('animationRules')
}

export default Helper.helper(retainRules);
