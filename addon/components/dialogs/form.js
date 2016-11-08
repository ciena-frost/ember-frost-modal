import Ember from 'ember'
const {computed} = Ember
import FrostModalBinding from '../frost-modal-binding'
import { form } from '../../helpers/frost-modal-animation'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    buttons: PropTypes.array,
    cancel: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    confirm: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    footer: PropTypes.string,
    form: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]).isRequired,
    isVisible: PropTypes.bool.isRequired,
    links: PropTypes.array,
    subtitle: PropTypes.string,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    return {
      animation: form,
      classModifier: 'form',
      modal: 'frost-modal-dialog'
    }
  },

  // == Computed properties ===================================================

  params: computed(function () {
    return {
      buttons: this.buttons,
      cancel: this.cancel,
      confirm: this.confirm,
      content: this.form,
      footer: this.footer,
      links: this.links,
      subtitle: this.subtitle,
      title: this.title
    }
  })

})
