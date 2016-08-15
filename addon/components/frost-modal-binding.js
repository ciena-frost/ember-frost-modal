import Ember from 'ember'
const {
  computed,
  inject,
  isPresent,
  on
} = Ember
import layout from '../templates/components/frost-modal-binding'
import localComponentLookup from '../utils/local-component-lookup'
import { PropTypes } from 'ember-prop-types'

const FrostModalBinding = Ember.Component.extend({

  // == Dependencies ==========================================================

  modalService: inject.service('frost-modal'),
  routing: inject.service('-routing'),

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    // Positional params
    modalComponentName: PropTypes.string.isRequired,

    // Options
    animation: PropTypes.func,
    classModifier: PropTypes.string,
    closeOnOutsideClick: PropTypes.bool,
    content: PropTypes.shape({
      component: PropTypes.string.isRequired,
      params: PropTypes.oneOfType([
        PropTypes.EmberObject,
        PropTypes.object
      ])
    }),
    isVisible: PropTypes.bool.isRequired,
    params: PropTypes.oneOfType([
      PropTypes.EmberObject,
      PropTypes.object
    ]),
    targetOutlet: PropTypes.string,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    return {
      closeOnOutsideClick: false,
      targetOutlet: 'modal'
    }
  },

  // == Events ================================================================

  // TODO Extract: Good intentions, but needs to be carried further into a
  // local-component closure to be effective

  // setComponentPaths: on('init', function() {
  //   this.set('_modalComponentPath', localComponentLookup.call(
  //     this, this.get('routing'), this.modalComponentName)
  //   )

  //   const contentComponentName = this.get('content.component')
  //   if (isPresent(contentComponentName)) {
  //     this.set('content.component', localComponentLookup.call(
  //       this, this.get('routing'), contentComponentName)
  //     )
  //   }
  // }),

  didReceiveAttrs() {
    this.get('modalService').setState(this.modalComponentName, this.isVisible)
  },

  // == Actions ===============================================================

  actions: {
    _onCancel() {
      const onCancel = this.get('onCancel')
      if (onCancel) {
        onCancel()
      }
      this.onClose()
    },

    _onConfirm() {
      const onConfirm = this.get('onConfirm')
      if (onConfirm) {
        onConfirm()
      }
      this.onClose()
    },

    _onOutsideClick() {
      if (this.get('closeOnOutsideClick')) {
        this.onClose()
      }
    }
  }

})

FrostModalBinding.reopenClass({
  positionalParams: [ 'modalComponentName' ]
})

export default FrostModalBinding
