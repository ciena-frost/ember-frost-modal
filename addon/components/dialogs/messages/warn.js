import computed, {readOnly} from 'ember-computed-decorators'
import {message} from '../../../helpers/frost-modal-animation'
import FrostModalBinding from '../../frost-modal-binding'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    buttons: PropTypes.array,
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
    footer: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    isVisible: PropTypes.bool.isRequired,
    links: PropTypes.array,
    subtitle: PropTypes.string,
    summary: PropTypes.string,
    targetOutlet: PropTypes.string,
    title: PropTypes.string.isRequired,

    // Actions
    onCancel: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func
  },

  getDefaultProps () {
    return {
      animation: message,
      classModifier: 'message',
      modal: 'frost-modal-dialog'
    }
  },

  // == Computed properties ===================================================

  @readOnly
  @computed()
  params () {
    return {
      buttons: this.buttons,
      cancel: this.cancel,
      confirm: this.confirm,
      content: this.details,
      footer: this.footer,
      icon: {
        name: 'warning',
        pack: 'frost'
      },
      links: this.links,
      subtitle: this.subtitle,
      summary: this.summary,
      title: this.title
    }
  }

})
