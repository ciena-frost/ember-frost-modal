import Ember from 'ember'
const {Component, inject, run} = Ember
import layout from '../templates/components/frost-modal-binding'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

const FrostModalBinding = Component.extend(PropTypesMixin, {

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    // Positional params
    modal: PropTypes.string.isRequired,

    // Options
    animation: PropTypes.func,
    classModifier: PropTypes.string,
    closeOnOutsideClick: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    params: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]),
    noBlur: PropTypes.bool,
    targetOutlet: PropTypes.string,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    return {
      closeOnConfirm: true,
      closeOnOutsideClick: false,
      targetOutlet: 'modal'
    }
  },

  // == Events ================================================================

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

    _onConfirm () {
      const onConfirm = this.get('onConfirm')
      if (onConfirm) {
        onConfirm()
      }
      if (this.get('closeOnConfirm') === true) {
        this.onClose()
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
