import Ember from 'ember'
const {
  get,
  on
} = Ember
const {
  next,
  later,
  scheduleOnce
} = Ember.run
import Remodal from 'ember-remodal/components/ember-remodal'
import layout from '../templates/components/fixed-remodal'

export default Remodal.extend({
  layout,

  _destroyDomElements() {
    const modal = this.get('modal');
    if (modal) {
      modal.destroy();
      delete this.modal;
    }
  },

  _createInstanceAndOpen() {
    let modal = Ember.$(this.get('modalId')).remodal({
      hashTracking: this.get('hashTracking'),
      closeOnOutsideClick: this.get('closeOnOutsideClick'),
      closeOnEscape: this.get('closeOnEscape'),
      modifier: this.get('modifier')
    });
    this.set('modal', modal);
    this.send('open');
  },

  _closeModal() {
    this.get('modal').close();
    later(this, '_destroyDomElements', 500);
  },

  _toggleOpen() {
    if (!this.isDestroyed) {
      this.toggleProperty('isOpen')
    }
  },

  actions: {
    open() {
      this.set('isOpen', true)
      if (this.get('modal')) {
        scheduleOnce('afterRender', this, '_openModal');
      } else {
        scheduleOnce('afterRender', this, '_createInstanceAndOpen');
      }
    },
    close() {
      later(this, '_toggleOpen', 500);
      next(this, '_closeModal');
    }
  }
})
