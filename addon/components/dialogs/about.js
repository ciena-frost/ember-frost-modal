import Ember from 'ember'
const {
  assign
} = Ember
import FrostModalBinding from '../frost-modal-binding'
import { about } from '../../helpers/frost-modal-animation'
import { PropTypes, PropTypesMixin } from 'ember-prop-types'

export default FrostModalBinding.extend(PropTypesMixin, {

  // == State properties ======================================================

  propTypes: {
    // Options
    brandingStrip: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      pack: PropTypes.string.isRequired
    }).isRequired,
    copyright: PropTypes.string.isRequired,
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

    // Constants TODO getConstants - like getDefaultProps, but assert if `this` has the prop defined
    // animation: PropTypes.func,
    // classModifier: PropTypes.string,
    // closeOnOutsideClick: PropTypes.bool,
    // modal: PropTypes.string
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: about,
      classModifier: 'about',
      closeOnOutsideClick: true,
      modal: 'frost-modal-about-dialog',
      params: {
        brandingStrip: this.brandingStrip,
        copyright: this.copyright,
        logo: this.logo,
        product: this.product,
        versions: this.versions
      }
    })

    return defaultProps
  }

})
