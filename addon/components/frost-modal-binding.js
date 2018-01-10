import Ember from 'ember'
const {Component, inject, run} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import layout from '../templates/components/frost-modal-binding'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

/**
 * Helper to ensure we don't try to resolve something that isn't a then-able
 * @param {Object} thing - probably a promise
 * @returns {Boolean} whether thing is a thenable
 */
function isThenable (thing) {
  return (thing !== undefined) && (typeof thing.then === 'function')
}

const FrostModalBinding = Component.extend(PropTypesMixin, {

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    // Positional params
    modal: PropTypes.string,

    // Options
    animation: PropTypes.func,
    classModifier: PropTypes.string,
    closeOnConfirm: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    // desired properties of the 'Confirm' button
    confirm: PropTypes.shape({
      disabled: PropTypes.bool,
      disabledText: PropTypes.string,
      isVisible: PropTypes.bool,
      tabIndex: PropTypes.number,
      text: PropTypes.string,
      title: PropTypes.string
    }),
    disableConfirmUntilOnConfirmResolves: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    params: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]),
    noBlur: PropTypes.bool,
    targetOutlet: PropTypes.string,

    // State
    forceDisabledConfirm: PropTypes.bool, // only used when we are currently overriding the confirm button state

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    return {
      closeOnConfirm: true,
      closeOnOutsideClick: false,
      confirm: {
        disabled: false,
        disabledText: 'Confirm',
        isVisible: true,
        text: 'Confirm'
      },
      _defaultConfirm: {
        disabled: false,
        disabledText: 'Confirm',
        isVisible: true,
        text: 'Confirm'
      },
      disableConfirmUntilOnConfirmResolves: true,
      forceDisabledConfirm: false,
      targetOutlet: 'modal'
    }
  },

  // == Computed Properties ===================================================

  @readOnly
  @computed('confirm', 'forceDisabledConfirm', '_defaultConfirm')
  /**
   * Computed our Confirm button's props so that we can alter text/disabled in concord with onConfirm promises
   * TODO: Update confirm/error/info/warn to use this as well: they currently use this.confirm directly
   * @param {Object} confirm - normal props for confirm button
   * @param {Boolean} forceDisabledConfirm - whether to override normal confirm button props
   * @param {Object} defaultConfirm - defaults for confirm button, in case someone doesn't specify text
   * @returns {Object} - props to use when displaying the confirm button
   */
  confirmButtonProps (confirm, forceDisabledConfirm, defaultConfirm) {
    if (forceDisabledConfirm) {
      const text = confirm.disabledText || defaultConfirm.disabledText || confirm.text || defaultConfirm.text
      return {
        ...confirm,
        disabled: true,
        text
      }
    }
    return confirm
  },

  // == Events ================================================================

  init () {
    this._super(...arguments)

    // This is necessary because we can't list modal as required via propTypes, because
    // we want components that derive from frost-modal-binding to be able to provide their own default 'modal'
    // properties, and ember-prop-types won't let us override parent propTypes in children. (@job13er 2017-06-02)
    const modal = this.get('modal')
    if (!modal) {
      throw new Error('frost-modal-binding: Missing required property "modal"')
    }
  },

  didReceiveAttrs () {
    this.get('modalService').setState(this.modalComponentName, this.isVisible, this.noBlur)
  },

  didUpdateAttrs () {
    run.next(() => {
      if (this.isDestroyed || this.isDestroying) return
      this.notifyPropertyChange('params')
    })
  },

  // == Actions ===============================================================

  actions: {
    _onCancel () {
      const onCancel = this.get('onCancel')
      if (onCancel) {
        onCancel()
      }
      this.onClose()
    },

    /**
     * Handle confirmation in a promise-aware way.
     * If onConfirm returns a promise, closeOnConfirm will wait for it to resolve successfully before closing the modal.
     * @returns {Object} the return value of onConfirm.
     * @private
     */
    _onConfirm () {
      const onConfirm = this.get('onConfirm')
      let confirmed
      if (onConfirm) {
        confirmed = onConfirm()
      }

      if (this.get('closeOnConfirm') === true) {
        if (isThenable(confirmed)) {
          // We handle these separately because someone might want to
          // have the confirm button disabled, but not call onClose automatically.
          if (this.get('disableConfirmUntilOnConfirmResolves')) {
            this.set('forceDisabledConfirm', true)
            confirmed = confirmed.then(() => {
              this.set('forceDisabledConfirm', false)
            })
          }

          confirmed = confirmed.then(() => {
            this.onClose()
          })

          return confirmed
        }

        // Otherwise, we don't care about promise awareness
        this.onClose()
        return confirmed
      }
    },

    _onOutsideClick () {
      if (this.get('closeOnOutsideClick')) {
        this.onClose()
      }
    }
  }
})

FrostModalBinding.reopenClass({
  positionalParams: [ 'modal' ]
})

export default FrostModalBinding
