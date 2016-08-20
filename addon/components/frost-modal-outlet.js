import Ember from 'ember'
const { Component } = Ember
import layout from '../templates/components/frost-modal-outlet'
import { PropTypes } from 'ember-prop-types'

export default Component.extend({

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    name: PropTypes.string
  },

  getDefaultProps () {
    return {
      name: 'modal'
    }
  }

})
