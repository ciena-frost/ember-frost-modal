import computed, {readOnly} from 'ember-computed-decorators'
import {about} from '../../helpers/frost-modal-animation'
import FrostModalBinding from '../frost-modal-binding'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    brandingStrip: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      pack: PropTypes.string.isRequired
    }).isRequired,
    // htmlSafe() doesn't return a string, so can't use string here for copyright (@job13er 2017-06-02)
    copyright: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    isVisible: PropTypes.bool.isRequired,
    logo: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      pack: PropTypes.string.isRequired
    }).isRequired,
    product: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      pack: PropTypes.string.isRequired
    }),
    targetOutlet: PropTypes.string,
    versions: PropTypes.arrayOf(PropTypes.string).isRequired,

    // Actions
    onClose: PropTypes.func.isRequired
  },

  getDefaultProps () {
    return {
      animation: about,
      classModifier: 'about',
      closeOnOutsideClick: true,
      modal: 'frost-modal-about-dialog'
    }
  },

  // == Computed properties ===================================================
  @readOnly
  @computed()
  params () {
    return {
      brandingStrip: this.brandingStrip,
      copyright: this.copyright,
      logo: this.logo,
      product: this.product,
      versions: this.versions
    }
  }

})
