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
    modal: PropTypes.string,

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
    onClose: PropTypes.func.isRequired,
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
