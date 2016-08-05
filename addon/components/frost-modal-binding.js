import Ember from 'ember'
const {
  getOwner,
  inject
} = Ember
import layout from '../templates/components/frost-modal-binding'
import { PropTypes } from 'ember-prop-types'

const FrostModalBinding = Ember.Component.extend({

  // == Dependencies ==========================================================

  routing: inject.service('-routing'),

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    closeOnOutsideClick: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    modalName: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func,
    onOpen: PropTypes.func,
    target: PropTypes.string
  },

  getDefaultProps () {
    return {
      closeOnOutsideClick: true,
      isVisible: false,
      target: 'modal'
    }
  },

  // == Computed properties ===================================================

  modalPath: Ember.computed('modalName', function () {
    const routePath = this.get('routing.currentPath')
    const localModalComponentPath = `${routePath}/components/${this.get('modalName')}`
    const componentLookup = getOwner(this).lookup('component-lookup:main')
    const component = componentLookup.componentFor(localModalComponentPath, getOwner(this))
    const layout = componentLookup.layoutFor(localModalComponentPath, getOwner(this))
    if (!!(component || layout)) {
      return localModalComponentPath
    } else {
      return this.get('modalName')
    }
  }),

  // == Functions =============================================================

  // == Actions ===============================================================

  actions: {
    _onCancel() {
      if (this.onCancel) {
        this.onCancel()
      }
      this.onClose()
    },

    _onConfirm() {
      if (this.onConfirm) {
        this.onConfirm()
      }
      this.onClose()
    },

    _onOutsideClick() {
      if (this.get('closeOnOutsideClick')) {
        this.onClose()
      }
    }
  }

   // _onCancel: Ember.computed('onCancel', function() {
  //   if (this.get('onCancel') {
  //     return this.get('onCancel')
  //   } else {
  //     (action (mut isModalVisible) false)
  //   }
  // })
})

FrostModalBinding.reopenClass({
  positionalParams: [ 'modalName', 'isVisible' ]
})

export default FrostModalBinding
