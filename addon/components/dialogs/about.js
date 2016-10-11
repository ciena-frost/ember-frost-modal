import Ember from 'ember'
const {computed} = Ember
import FrostModalBinding from '../frost-modal-binding'
import { about } from '../../helpers/frost-modal-animation'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
const assign = Object.assign || Ember.assign || Ember.merge

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
  },

  getDefaultProps () {
    let defaultProps = this._super()

    assign(defaultProps, {
      animation: about,
      classModifier: 'about',
      closeOnOutsideClick: true,
      modal: 'frost-modal-about-dialog'
    })

    return defaultProps
  },

  // == Computed properties ===================================================

  params: computed(function () {
    return {
      brandingStrip: this.brandingStrip,
      copyright: this.copyright,
      logo: this.logo,
      product: this.product,
      versions: this.versions
    }
  })

})
