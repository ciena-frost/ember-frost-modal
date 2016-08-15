import Ember from 'ember'
const { Component } = Ember
import layout from '../templates/components/frost-modal-summary'
import { PropTypes } from 'ember-prop-types'

export default Component.extend({

  // == Component properties ==================================================

  classNames: ['frost-modal-summary'],
  layout,

  // == State properties ======================================================

  propTypes: {
    summary: PropTypes.string.isRequired
  }

})
