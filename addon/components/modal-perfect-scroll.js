import Ember from 'ember'
const {
  get,
  on
} = Ember
import PerfectScroll from 'ember-perfect-scroll/components/perfect-scroll'

export default PerfectScroll.extend({
  _destroyPerfectScroll: on('willDestroyElement', function () {
    var el = document.getElementById(get(this, 'eId'))
    if (el) {
      window.Ps.destroy(el)
    }
  })
})
