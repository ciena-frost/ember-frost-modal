import Ember from 'ember'
const {
  assign
} = Ember
import FrostModalBinding from '../../frost-modal-binding'
import { message } from '../../../helpers/frost-modal-animation'
import { PropTypes } from 'ember-prop-types'

export default FrostModalBinding.extend({

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
    details: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]),
    isVisible: PropTypes.bool.isRequired,
    links: PropTypes.EmberObject,
    summary: PropTypes.string,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func

    // Constants TODO getConstants - like getDefaultProps, but assert if `this` has the prop defined
    // animation: PropTypes.func,
    // classModifier: PropTypes.string,
    // modalComponentName: PropTypes.string,
    // icon: PropTypes.string,
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: message,
      classModifier: 'message',
      modal: 'frost-modal-dialog',
      params: {
        cancel: this.cancel,
        confirm: this.confirm,
        content: this.details,
        icon: {
          name: 'warn',
          pack: 'frost-modal'
        },
        links: this.links,
        summary: this.summary,
        title: this.title
      }
    })

    return defaultProps
  }

})
