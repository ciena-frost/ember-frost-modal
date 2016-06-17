import Ember from 'ember'
const {
  get
} = Ember
import PerfectScroll from 'ember-perfect-scroll/components/perfect-scroll/component'

export default PerfectScroll.extend({
  willDestroyElement () {
    var el = document.getElementById(get(this, 'eId'))
    if (el) {
      window.Ps.destroy(el)
    }
  }
})
