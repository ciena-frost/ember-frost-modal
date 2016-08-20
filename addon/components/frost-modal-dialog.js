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
    isOverflowYStart: PropTypes.bool,
    isOverflowYEnd: PropTypes.bool
  },

  // == Events ================================================================

  // Minor issue - overflow isn't triggered when content component size changes
  initOverflow: on('didInsertElement', function () {
    const scroll = this.$('.frost-modal-scroll').get(0)
    if (scroll.scrollHeight > scroll.clientHeight) {
      run.schedule('sync', () => {
        this.set('isOverflowYEnd', true)
      })
    }
  }),

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
