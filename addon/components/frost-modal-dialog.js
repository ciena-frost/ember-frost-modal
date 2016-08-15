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
    isCancelVisible: PropTypes.bool,
    isConfirmVisible: PropTypes.bool
  },

  getDefaultProps () {
    return {
      isCancelVisible: true,
      isConfirmVisible: true
    }
  },

  initOverflow: on('didInsertElement', function() {
    const scroll = this.$('.frost-modal-scroll').get(0)
    if (scroll.scrollHeight > scroll.clientHeight) {
      run.schedule('sync', () => {
        this.set('isOverflowYEnd', true)
      })
    }
  }),

  actions: {
    scrollDown() {
      this.set('isOverflowYStart', true)
    },

    scrollUp() {
      this.set('isOverflowYEnd', true)
    },

    scrollYEnd() {
      this.set('isOverflowYEnd', false)
    },

    scrollYStart() {
      this.set('isOverflowYStart', false)
    }
  }

})
