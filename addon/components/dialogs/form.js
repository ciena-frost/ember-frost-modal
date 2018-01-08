import computed, {readOnly} from 'ember-computed-decorators'
import {form} from '../../helpers/frost-modal-animation'
import FrostModalBinding from '../frost-modal-binding'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    buttons: PropTypes.array,
    cancel: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      tabIndex: PropTypes.number,
      text: PropTypes.string,
      title: PropTypes.string
    }),
    confirm: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      tabIndex: PropTypes.number,
      text: PropTypes.string,
      title: PropTypes.string
    }),
    // This is only used when we are overriding the confirm button's state, which
    // is useful if we want to prevent spamming Confirm until onConfirm resolves.
    disabledConfirm: PropTypes.shape({
      disabled: PropTypes.bool,
      isVisible: PropTypes.bool,
      tabIndex: PropTypes.number,
      text: PropTypes.string,
      title: PropTypes.string
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
      disabledConfirm: {
        disabled: true,
        isVisible: true,
        // This is OK because we only need this if the confirm button is visible anyway.
        text: 'Confirm',
        title: 'Waiting for confirm to resolve' // never shown because button is disabled
      },
      modal: 'frost-modal-dialog'
    }
  },

  // == Computed properties ===================================================

  @readOnly
  @computed('forceDisabledConfirm')
  params (forceDisabledConfirm) {
    // We look these up here, rather than using arguments to computed(), so that we avoid double-computed errors
    // when we hide the modal.  The recomputation seems to still happen when confirm is changed
    // (e.g. validation state changes), thankfully.
    const {confirm, disabledConfirm} = this.getProperties('confirm', 'disabledConfirm')
    const _confirm = forceDisabledConfirm ? disabledConfirm : confirm
    return {
      buttons: this.buttons,
      cancel: this.cancel,
      confirm: _confirm,
      content: this.form,
      footer: this.footer,
      links: this.links,
      subtitle: this.subtitle,
      title: this.title
    }
  }

})
