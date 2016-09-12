import Ember from 'ember'
const {
  assign,
  computed
} = Ember
import FrostModalBinding from '../frost-modal-binding'
import { form } from '../../helpers/frost-modal-animation'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    cancel: PropTypes.shape({
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    confirm: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    form: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]).isRequired,
    isVisible: PropTypes.bool.isRequired,
    subtitle: PropTypes.string,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: form,
      classModifier: 'form',
      modal: 'frost-modal-dialog'
    })

    return defaultProps
  },

  // == Computed properties ===================================================

  params: computed(function () {
    return {
      cancel: this.cancel,
      confirm: this.confirm,
      content: this.form,
      links: this.links,
      subtitle: this.subtitle,
      title: this.title
    }
  })

})
