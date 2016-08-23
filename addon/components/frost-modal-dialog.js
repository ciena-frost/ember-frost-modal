import Ember from 'ember'
const {
  Component,
  on,
  run
} = Ember
import layout from '../templates/components/frost-modal-dialog'
import { PropTypes } from 'ember-prop-types'

export default Component.extend({

  // == Component properties ==================================================

  classNames: ['frost-modal-dialog'],
  layout,

  // == State properties ======================================================

  propTypes: {
    // Constants TODO getConstants - like getDefaultProps, but assert if `this` has the prop defined
    // isOverflowYStart: PropTypes.bool,
    // isOverflowYEnd: PropTypes.bool
  },

  // == Events ================================================================

  // Minor issue - overflow isn't triggered when content component size changes
  // BEGIN-SNIPPET dialog-overflow
  initOverflow: on('didInsertElement', function () {
    const scroll = this.$('.frost-modal-dialog-scroll').get(0)
    if (scroll.scrollHeight > scroll.clientHeight) {
      run.schedule('sync', () => {
        this.set('isOverflowYEnd', true)
      })
    }
  }),
  // END-SNIPPET

  // == Actions ===============================================================

  actions: {
    scrollDown () {
      this.set('isOverflowYStart', true)
    },

    scrollUp () {
      this.set('isOverflowYEnd', true)
    },

    scrollYEnd () {
      this.set('isOverflowYEnd', false)
    },

    scrollYStart () {
      this.set('isOverflowYStart', false)
    }
  }

})
