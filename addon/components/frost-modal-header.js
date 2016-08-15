import Ember from 'ember'
const { Component } = Ember
import layout from '../templates/components/frost-modal-header'
import { PropTypes } from 'ember-prop-types'

export default Component.extend({

  // == Component properties ==================================================

  classNames: ['frost-modal-header'],
  layout,

  // == State properties ======================================================

  propTypes: {
    icon: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      pack: PropTypes.string
    }).isRequired,
    title: PropTypes.string.isRequired
  }

})
