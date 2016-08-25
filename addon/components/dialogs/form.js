import Ember from 'ember'
const {
  assign
} = Ember
import FrostModalBinding from '../frost-modal-binding'
import { form } from '../../helpers/frost-modal-animation'
import { PropTypes, PropTypesMixin } from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    cancel: PropTypes.shape({
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    confirm: PropTypes.shape({
      isVisible: PropTypes.bool,
      text: PropTypes.string
    }),
    form: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]).isRequired,
    isVisible: PropTypes.bool.isRequired,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func

    // Constants TODO getConstants - like getDefaultProps, but assert if `this` has the prop defined
    // animation: PropTypes.func,
    // classModifier: PropTypes.string,
    // modal: PropTypes.string,
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: form,
      classModifier: 'form',
      modal: 'frost-modal-dialog',
      params: {
        cancel: this.cancel,
        confirm: this.confirm,
        content: this.form,
        title: this.title
      }
    })

    return defaultProps
  }

})
